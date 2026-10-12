document.addEventListener("DOMContentLoaded", function () {
  // BACK TO TOP
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    const scrollTrigger = window.innerHeight / 3;

    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollTrigger) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // HAMBURGER MENU
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // ===== CHAT SETUP =====
{
  const toggle = document.querySelector('.gis-chat-toggle');
  const panel = document.querySelector('.gis-chat-panel');
  const closeBtn = panel?.querySelector('.gis-chat-close');
  const messages = panel?.querySelector('.gis-chat-messages');
  const form = panel?.querySelector('.gis-chat-input-row');
  const input = form?.querySelector('input[type="text"], textarea');

  if (toggle && panel && messages && form && input) {
    let hasWelcomed = false;
    let sending = false;
    const sessionId = crypto.randomUUID();
    const sendBtn = form.querySelector('button[type="submit"]');
    const actions = new Map([
      ['https://dankogoluza.com/#contact', 'Discuss your project'],
      ['https://dankogoluza.com/pages/projects.html', 'Explore projects'],
      ['https://dankogoluza.com/pages/ivansPortfolio.html', 'View IVANS case study'],
      ['https://dankogoluza.com/pages/dokoPortfolio.html', 'View Doko case study'],
      ['https://dankogoluza.com/pages/myPortfolio.html', 'View portfolio case study'],
    ]);

    messages.setAttribute('role', 'log');
    messages.setAttribute('aria-live', 'polite');
    messages.setAttribute('aria-relevant', 'additions text');
    input.setAttribute('aria-label', 'Your message');
    input.maxLength = 1000;
    sendBtn?.setAttribute('aria-label', 'Send message');

    function closeChat() {
      panel.classList.add('is-hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    function addMessage(text, from = 'bot') {
      const row = document.createElement('div');
      row.className = 'gis-chat-message-row ' + (from === 'user' ? 'from-user' : 'from-bot');
      const bubble = document.createElement('div');
      bubble.className = 'gis-chat-message ' + (from === 'user' ? 'user' : 'bot');
      bubble.style.whiteSpace = 'pre-wrap';
      bubble.style.overflowWrap = 'anywhere';
      // Render text safely; only known studio URLs become action buttons.
      if (from === 'bot') {
        const parts = text.split(/(https:\/\/dankogoluza\.com\/[^\s<>]*|info@dankogoluza\.com)/g);
        for (const part of parts) {
          const url = part.replace(/[.,;!?)]+$/, '');
          if (part === 'info@dankogoluza.com') {
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:info@dankogoluza.com';
  emailLink.textContent = part;
  emailLink.style.cssText =
    'color:#ffad66;text-decoration:underline;overflow-wrap:anywhere;';
  bubble.appendChild(emailLink);
} else if (actions.has(url)) {
            const link = document.createElement('a');
            link.href = url;
            link.textContent = actions.get(url);
            link.style.cssText = 'display:block;width:fit-content;max-width:100%;box-sizing:border-box;margin-top:10px;padding:10px 14px;min-height:44px;border:1px solid #ff851b;border-radius:8px;color:#ffad66;background:#11151d;font:inherit;text-decoration:underline;white-space:normal;';
            link.addEventListener('click', () => {
              if (url === 'https://dankogoluza.com/#contact') closeChat();
            });
            bubble.appendChild(link);
            if (part.length > url.length) bubble.appendChild(document.createTextNode(part.slice(url.length)));
          } else {
            bubble.appendChild(document.createTextNode(part));
          }
        }
      } else {
        bubble.textContent = text;
      }
      row.appendChild(bubble);
      messages.appendChild(row);
      messages.scrollTop = messages.scrollHeight;
      return row;
    }

    function openChat() {
      panel.classList.remove('is-hidden');
      toggle.setAttribute('aria-expanded', 'true');
      if (!hasWelcomed) {
        addMessage('Hi! I can help with general questions about web design, AI assistants, projects, pricing, and process. What would you like to know?');
        hasWelcomed = true;
      }
      input.focus();
    }

    // This is a native button: browser keyboard activation already fires click.
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      if (panel.classList.contains('is-hidden')) openChat();
      else closeChat();
    });
    closeBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      closeChat();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.classList.contains('is-hidden')) closeChat();
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const text = input.value.trim();
      if (!text || sending) return;
      if (new TextEncoder().encode(text).length > 2000) {
        addMessage('Please shorten your message before sending it.');
        return;
      }
      sending = true;
      if (sendBtn) sendBtn.disabled = true;
      addMessage(text, 'user');
      input.value = '';
      const waiting = addMessage('Finding an answer…');
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 40000);
      try {
        const response = await fetch('/chat.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ message: text, sessionId }),
          signal: controller.signal,
        });
        const data = await response.json();
        waiting.remove();
        if (!response.ok) {
          addMessage(typeof data.error === 'string' ? data.error : 'The assistant is temporarily unavailable. Please try again or email info@dankogoluza.com.');
        } else if (typeof data.reply === 'string' && data.reply.trim()) {
          addMessage(data.reply);
        } else {
          throw new Error('Missing reply');
        }
      } catch {
        waiting.remove();
        addMessage('I couldn’t retrieve an answer. Please try again in a moment, or contact https://dankogoluza.com/#contact');
      } finally {
        clearTimeout(timer);
        sending = false;
        if (sendBtn) sendBtn.disabled = false;
      }
    });
  }
}

  // HINT BUBBLE
  const hint = document.querySelector(".gis-chat-hint");
  if (hint && !sessionStorage.getItem("gisHintShown")) {
    sessionStorage.setItem("gisHintShown", "true");
    setTimeout(() => hint.classList.add("show"), 1200);
    setTimeout(() => hint.classList.remove("show"), 8000);
  }
});

//THANK YOU PAGE 
// CONTACT FORM
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      window.location.href = "pages/thank-you.html";
    } else {
      alert("Transmission failed. Please try again.");
    }
  });
}

