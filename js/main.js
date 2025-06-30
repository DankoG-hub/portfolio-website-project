
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





