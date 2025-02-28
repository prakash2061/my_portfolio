// Adaptive particle system
function createParticles() {
  const particleField = document.getElementById("particles");
  const particleCount = window.innerWidth < 768 ? 50 : 100;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = particle.style.height = `${
      Math.random() * (window.innerWidth < 480 ? 3 : 5) + 2
    }px`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.background = `rgba(${Math.random() * 255}, 
            ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
    particleField.appendChild(particle);
  }
}

// Adaptive parallax effect
let isTouchDevice = "ontouchstart" in window;
let moveFactor = isTouchDevice ? 5 : 15;

document.addEventListener(isTouchDevice ? "touchmove" : "mousemove", (e) => {
  const container = document.querySelector(".quantum-container");
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  const x = (clientX / window.innerWidth - 0.5) * moveFactor;
  const y = (clientY / window.innerHeight - 0.5) * moveFactor;

  container.style.transform = `rotateX(${y}deg) rotateY(${x}deg) 
        scale(${isTouchDevice ? 1 : 1})`;
});

// Performance-friendly resize handler
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelector(".particle-field").innerHTML = "";
    createParticles();
  }, 200);
});

// Initialize
createParticles();

// Prevent zoom gesture
document.addEventListener("gesturestart", (e) => {
  e.preventDefault();
});

// ========== My Special ==========
// ========== Quantum Wisdom Console ==========
const wisdoms = [
  "%c🌌 Perfection is asymptotic...",
  "%c🌀 Excellence evolves with perspective",
  "%c🎭 Quality is contextual",
  "%c⏳ The ideal is transient",
  "%c💧 Value flows with need",
  "%c🎯 Superiority is situational",
  "%c📐 Primacy depends on parameters",
  "%c🏔️ The peak moves as we climb",
];

const wisdomStyles = [
  "color: #7f5af0; font-size: 12px; font-style: italic;",
  "color: #2cb67d; font-size: 12px; font-weight: bold;",
  "color: #ff8906; font-size: 12px; text-decoration: underline;",
  "color: #e53170; font-size: 12px; font-family: monospace;",
  "color: #25d0ab; font-size: 12px; letter-spacing: 1px;",
  "color: #f25f4c; font-size: 12px; text-transform: uppercase;",
  "color: #a786df; font-size: 12px; border-left: 3px solid currentColor; padding-left: 5px;",
  "color: #3da9de; font-size: 12px; font-weight: bold; font-style: italic;",
];

function logQuantumWisdom() {
  console.log(
    "%c🌀 Wisdom Console\n%cprajwalpanth.com.np",
    "font-size: 24px; color: #30b594; font-family: monospace; padding-bottom: 10px;",
    "font-size: 12px; color: #666; margin-top: -5px;"
  );

  console.log("%c═══════════════════════════════", "color: #30b594;");

  wisdoms.forEach((wisdom, index) => {
    console.log(wisdom, wisdomStyles[index]);
  });

  console.log("%c═══════════════════════════════", "color: #30b594;");
  console.log(
    "%c🔭 Explore with curious eyes...",
    "color: #fff; font-size: 14px; padding: 5px 0;"
  );
}

// Enhanced click interaction
document.querySelector(".paradox-text").addEventListener("click", function () {
  console.clear();
  console.log(
    "%c🚀 Quantum Console Activated",
    "font-size: 18px; color: #30b594; font-weight: bold;"
  );

  alert(
    "Quantum perspectives await in the console..."
  );

  // Main message with ASCII art
  console.log(
    `%c
    I am
    _____           _               _   _____            _   _     
   |  __ \\         (_)             | | |  __ \\          | | | |    
   | |__) | __ __ _ ___      ____ _| | | |__) |_ _ _ __ | |_| |__  
   |  ___/ '__/ _\` | \\ \\ /\\ / / _\` | | |  ___/ _\` | '_ \\| __| '_ \\ 
   | |   | | | (_| | |\\ V  V / (_| | | | |  | (_| | | | | |_| | | |
   |_|   |_|  \\__,_| | \\_/\\_/ \\__,_|_| |_|   \\__,_|_| |_|\\__|_| |_|
                  _/ |                                             
                 |__/                                              
    %c⚛️ The "best" is a superposition of possibilities
    %c   Observe carefully through the lens of context ⚖️`,
    "font-family: monospace; color: #30b594; line-height: 1.2;",
    "color: #fff; font-size: 16px; padding: 10px 0;",
    "color: #888; font-style: italic;"
  );
  
  
  // Grouped wisdom statements
  console.groupCollapsed(
    "%c📜 View Quantum Wisdoms (click to expand)",
    "color: #30b594; cursor: pointer;"
  );
  logQuantumWisdom();
  console.groupEnd();

  // Hidden surprise
  console.log(
    "%c🔍 Psst... Looking for secrets? The universe rewards curiosity.",
    "color: #666; font-size: 11px; margin-top: 20px;"
  );
});

// Initial subtle log
console.log(
  "%c💡 Hint: Interact with the quantum text...",
  "color: #30b594; font-size: 12px; font-style: italic;"
);
