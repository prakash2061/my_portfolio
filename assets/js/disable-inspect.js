//Add this script before closing//
// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Disable F12, Ctrl+Shift+I, Ctrl+U
  if (
    e.key === "F12" ||
    // (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});
