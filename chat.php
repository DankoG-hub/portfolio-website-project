<?php
declare(strict_types=1);

// Install at public_html/chat.php. Credentials stay outside public_html.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $data): never {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Please send messages through the website chat.']);
}

// Browser-origin check is an additional guard, not authentication.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!in_array($origin, ['https://dankogoluza.com', 'https://www.dankogoluza.com'], true)) {
    respond(403, ['error' => 'Please use the chat on dankogoluza.com.']);
}
if (strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0])) !== 'application/json') {
    respond(415, ['error' => 'A JSON message is required.']);
}
$raw = file_get_contents('php://input', false, null, 0, 8193);
if ($raw === false || strlen($raw) > 8192) {
    respond(413, ['error' => 'Please send a shorter message.']);
}
$request = json_decode($raw, true);
$message = is_array($request) ? ($request['message'] ?? null) : null;
$session = is_array($request) ? ($request['sessionId'] ?? null) : null;
if (!is_string($message) || trim($message) === '' || strlen($message) > 2000) {
    respond(400, ['error' => 'Please enter a message of no more than 2,000 bytes.']);
}
if (!is_string($session) || !preg_match('/\A[a-zA-Z0-9-]{16,36}\z/', $session)) {
    respond(400, ['error' => 'Please reload the page to start a new chat.']);
}

function postGoogle(string $url, string $body, array $headers): array {
    $curl = curl_init($url);
    if ($curl === false) {
        throw new RuntimeException('HTTP_INIT');
    }
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
    ]);
    $result = curl_exec($curl);
    $status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    if ($result === false) {
        throw new RuntimeException('GOOGLE_NETWORK');
    }
    $data = json_decode($result, true);
    if ($status < 200 || $status >= 300 || !is_array($data)) {
        // Do not log Google's response: it may contain user input or secrets.
        throw new RuntimeException('GOOGLE_HTTP_' . $status);
    }
    return $data;
}

function base64url(string $value): string {
    return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
}

try {
    umask(0077);
    $privateDir = dirname(__DIR__) . '/goluza-private';
    $key = json_decode((string) file_get_contents($privateDir . '/dialogflow-key.json'), true);
    if (!is_array($key) || ($key['project_id'] ?? '') !== 'goluza-interface-assistan-kmdo'
        || empty($key['private_key']) || empty($key['client_email'])) {
        throw new RuntimeException('CREDENTIAL_CONFIG');
    }

    // One bounded state file, private to the server. No conversation text stored.
    $stateFile = fopen($privateDir . '/chat-state.json', 'c+');
    if ($stateFile === false || !flock($stateFile, LOCK_EX)) {
        throw new RuntimeException('STATE_ACCESS');
    }
    $state = json_decode(stream_get_contents($stateFile), true);
    $hour = (int) floor(time() / 3600);
    if (!is_array($state) || ($state['hour'] ?? null) !== $hour) {
        $state = ['hour' => $hour, 'total' => 0, 'visitors' => []];
    }
    // Do not trust visitor-supplied forwarded-IP headers.
    $visitor = hash_hmac('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown', $key['private_key']);
    if (($state['total'] ?? 0) >= 300 || ($state['visitors'][$visitor] ?? 0) >= 30) {
        flock($stateFile, LOCK_UN);
        fclose($stateFile);
        header('Retry-After: ' . (3600 - time() % 3600));
        respond(429, ['error' => 'The chat message limit has been reached. Please try later or email info@dankogoluza.com.']);
    }
    $state['total']++;
    $state['visitors'][$visitor] = ($state['visitors'][$visitor] ?? 0) + 1;
    rewind($stateFile);
    $encoded = json_encode($state, JSON_THROW_ON_ERROR);
    if (!ftruncate($stateFile, 0) || fwrite($stateFile, $encoded) !== strlen($encoded) || !fflush($stateFile)) {
        throw new RuntimeException('STATE_WRITE');
    }
    flock($stateFile, LOCK_UN);
    fclose($stateFile);

    $now = time();
    $jwtHeader = base64url(json_encode(['alg' => 'RS256', 'typ' => 'JWT'], JSON_THROW_ON_ERROR));
    $claims = base64url(json_encode([
        'iss' => $key['client_email'],
        'scope' => 'https://www.googleapis.com/auth/cloud-platform',
        'aud' => 'https://oauth2.googleapis.com/token',
        'iat' => $now,
        'exp' => $now + 3600,
    ], JSON_THROW_ON_ERROR));
    $unsigned = $jwtHeader . '.' . $claims;
    if (!openssl_sign($unsigned, $signature, $key['private_key'], OPENSSL_ALGO_SHA256)) {
        throw new RuntimeException('CREDENTIAL_SIGN');
    }
    $auth = postGoogle('https://oauth2.googleapis.com/token', http_build_query([
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion' => $unsigned . '.' . base64url($signature),
    ]), ['Content-Type: application/x-www-form-urlencoded']);
    if (empty($auth['access_token']) || !is_string($auth['access_token'])) {
        throw new RuntimeException('TOKEN_MISSING');
    }

    $url = 'https://dialogflow.googleapis.com/v2/projects/goluza-interface-assistan-kmdo/agent/sessions/'
        . rawurlencode($session) . ':detectIntent';
    $answer = postGoogle($url, json_encode([
        'queryInput' => ['text' => ['text' => trim($message), 'languageCode' => 'en']],
        'queryParams' => ['timeZone' => 'Europe/Dublin'],
    ], JSON_THROW_ON_ERROR), [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $auth['access_token'],
    ]);
    $texts = [];
    foreach (($answer['queryResult']['fulfillmentMessages'] ?? []) as $item) {
        foreach (($item['text']['text'] ?? []) as $text) {
            if (is_string($text) && trim($text) !== '') {
                $texts[] = trim($text);
            }
        }
    }
    if (!$texts && !empty($answer['queryResult']['fulfillmentText'])) {
        $texts[] = $answer['queryResult']['fulfillmentText'];
    }
    respond(200, ['reply' => $texts ? implode("\n\n", $texts)
        : 'Could you rephrase that? You can also contact info@dankogoluza.com.']);
} catch (Throwable $error) {
    // Log only our fixed diagnostic codes, never credentials or visitor text.
    $code = $error->getMessage();
    error_log('Goluza chat: ' . (preg_match('/\A[A-Z_0-9]+\z/', $code) ? $code : 'SERVER_ERROR'));
    respond(503, ['error' => 'The assistant is temporarily unavailable. Please try again or email info@dankogoluza.com.']);
}
