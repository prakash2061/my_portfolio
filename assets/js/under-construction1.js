const particleCount = 200;
const particleContainer = document.querySelector(".quantum-particles");

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 3}px;
        height: ${Math.random() * 3}px;
        background: rgba(0, 243, 255, ${Math.random() * 0.3});
        border-radius: 50%;
        animation: particle-float ${5 + Math.random() * 10}s infinite;
    `;
  particleContainer.appendChild(particle);
}

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.documentElement.style.setProperty(
    "--hologram-blue",
    `hsl(${x * 360}, 100%, 70%)`
  );
  document.documentElement.style.setProperty(
    "--quantum-purple",
    `hsl(${y * 360}, 100%, 70%)`
  );
});

// Mobile height adjustment
const resizeObserver = new ResizeObserver((entries) => {
  document.documentElement.style.setProperty(
    "--viewport-height",
    `${window.innerHeight}px`
  );
});
resizeObserver.observe(document.body);
