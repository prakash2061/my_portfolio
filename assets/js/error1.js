const errorProphecies = [
  "WARNING: COGNITOHAZARD DETECTED IN PAGE CONTENT",
  "ARCHIVAL RECORDS SHOW 13 PREVIOUS DELETIONS",
  "HYPERLINK CORRUPTED BY TEMPORAL PARADOX",
  "PAGE CONTENT EXISTS AS SUPERPOSED ENTANGLEMENT",
  "MEMETIC CONTAINMENT FAILURE IMMINENT",
  "AUTOMATED ARCHIVAL SYSTEM OFFLINE SINCE Y2K38",
  "PAGE INDEXED IN BORGES' CYBER LIBRARY",
  "QUANTUM PAGE RANK: UNDEFINED/UNDEFINED",
  "THE PAGE YOU SEEK IS THE PAGE YOU DESTROYED",
  "ERROR: TIME REMAINING UNTIL PAGE EXISTENCE -∞",
];

const terminal = document.getElementById("errorLog");
let prophecyIndex = 0;

function inscribeProphecy() {
  const newLine = document.createElement("div");
  newLine.textContent = `> ${errorProphecies[prophecyIndex]}`;
  newLine.style.opacity = "0";
  terminal.appendChild(newLine);

  setTimeout(() => {
    newLine.style.opacity = "1";
    if (terminal.children.length > 15) {
      terminal.removeChild(terminal.children[0]);
    }
    window.requestAnimationFrame(() => {
      terminal.scrollTop = terminal.scrollHeight;
    });
  }, 100);

  prophecyIndex = (prophecyIndex + 1) % errorProphecies.length;
}

setInterval(inscribeProphecy, 3500);

// Slight rotation effect for desktop and mobile interactions
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  terminal.style.transform = `rotateX(${(y - 0.5) * 4}deg) rotateY(${
    (x - 0.5) * 4
  }deg)`;
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const x = touch.clientX / window.innerWidth;
  const y = touch.clientY / window.innerHeight;
  terminal.style.transform = `rotateX(${(y - 0.5) * 4}deg) rotateY(${
    (x - 0.5) * 4
  }deg)`;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    terminal.scrollTop -= 50;
  }
  if (e.key === "ArrowDown") {
    terminal.scrollTop += 50;
  }
});
