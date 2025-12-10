
console.log("main.js is working!");

const buttons = document.querySelectorAll('.glitch-effect');

    buttons.forEach(button => {
      const triggerGlitch = () => {
        button.classList.add('triggered');
        setTimeout(() => button.classList.remove('triggered'), 500);
      };

      button.addEventListener('mouseenter', triggerGlitch);
      button.addEventListener('click', triggerGlitch);
    });

    const logs = [
    "> Initializing neural link...",
    "> Uplink stable. Bandwidth: 124kb/s",
    "> Route trace complete.",
    "> Host node response: 200 OK",
    "> Memory block: /dev/interface/loaded",
    "> CPU Core Temp: 42.6°C",
    "> Signal error corrected.",
    "> Status: Nominal"
  ];

  const logOutput = document.getElementById('log-output');

  function addLogEntry() {
    const newLog = document.createElement('li');
    newLog.textContent = logs[Math.floor(Math.random() * logs.length)];
    logOutput.appendChild(newLog);

    if (logOutput.children.length > 6) {
      logOutput.removeChild(logOutput.children[0]);
    }
  }

  setInterval(addLogEntry, 4000); // every 4 seconds


//cursor effect 
  const scanner = document.getElementById('scanner-cursor');

  document.addEventListener('mousemove', (e) => {
    scanner.style.top = `${e.clientY}px`;
    scanner.style.left = `${e.clientX}px`;
  });

  //back to top button
  // Show button after 1/3 page scroll
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrollTrigger = window.innerHeight / 3;
  if (window.scrollY > scrollTrigger) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//HAMBURGER MENU
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

//MODAL POPUP

  document.addEventListener('DOMContentLoaded', () => {
    const engageBtn = document.querySelector('.engage-btn');
    const glitchOverlay = document.getElementById('screenGlitch');
    const targetId = '#about'; // where you want to go after glitch

    if (!engageBtn || !glitchOverlay) return;

    engageBtn.addEventListener('click', (e) => {
      e.preventDefault(); // stop instant jump to #about

      // activate glitch
      glitchOverlay.classList.add('active');

      // after ~900ms, remove glitch + scroll to section
      setTimeout(() => {
        glitchOverlay.classList.remove('active');

        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 950); // match glitch-fade duration
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".gis-chat-toggle");
    const panel = document.querySelector(".gis-chat-panel");
    const closeBtn = panel ? panel.querySelector(".gis-chat-close") : null;
    const messages = panel ? panel.querySelector(".gis-chat-messages") : null;
    const form = panel ? panel.querySelector(".gis-chat-input-row") : null;
    const input =
      form &&
      (form.querySelector("input[type='text']") ||
        form.querySelector("textarea"));

    let hasWelcomed = false;

    if (!toggle || !panel || !messages || !form || !input) {
      console.warn(
        "[GIS Chat] Some chat elements are missing – check your HTML structure."
      );
      return;
    }

    /* ========== Helpers ========== */

    function addMessage(text, from = "bot") {
      const row = document.createElement("div");
      row.className =
        "gis-chat-message-row " +
        (from === "user" ? "from-user" : "from-bot");

      const bubble = document.createElement("div");
      bubble.className =
        "gis-chat-message " + (from === "user" ? "user" : "bot");
      bubble.textContent = text;

      row.appendChild(bubble);
      messages.appendChild(row);

      // Scroll to bottom
      messages.scrollTop = messages.scrollHeight;
    }

    function openChat() {
      panel.classList.remove("is-hidden");
      toggle.setAttribute("aria-expanded", "true");

      if (!hasWelcomed) {
        addMessage(
          "Hi, I’m your interface assistant. I can help you understand my services, process, or discuss your project idea.",
          "bot"
        );
        hasWelcomed = true;
      }

      // Slight delay so focus works after transition
      setTimeout(() => {
        input.focus();
      }, 120);
    }

    function closeChat() {
      panel.classList.add("is-hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }

    function toggleChat() {
      if (panel.classList.contains("is-hidden")) {
        openChat();
      } else {
        closeChat();
      }
    }

    /* ========== Event listeners ========== */

    // Bubble click
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleChat();
    });

    // Open with Enter/Space for accessibility
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleChat();
      }
    });

    // Close button
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeChat();
      });
    }

    // ESC closes panel
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !panel.classList.contains("is-hidden")) {
        closeChat();
      }
    });

    // Form submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      // Add user message
      addMessage(text, "user");
      input.value = "";

      // TEMP: simple placeholder answer
      // Later this is where you call your Dialogflow webhook / REST API
      setTimeout(() => {
        addMessage(
          "Thanks for your message. In the final version, this assistant will give you tailored info about services, timelines, and project ideas based on my Dialogflow model.",
          "bot"
        );
      }, 400);
    });
  });








