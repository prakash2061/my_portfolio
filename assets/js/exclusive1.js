// =========================================================================
// JavaScript: Click to "Lock" a Slice in Full-Circle Mode
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const slices = document.querySelectorAll(".slice");

  slices.forEach((slice) => {
    slice.addEventListener("click", (event) => {
      // Prevent the click from bubbling up
      event.stopPropagation();
      // Remove active from all other slices
      slices.forEach((s) => {
        if (s !== slice) {
          s.classList.remove("active");
        }
      });
      // Toggle active on the clicked slice
      slice.classList.toggle("active");
    });
  });

  // Clicking outside any slice resets them all
  document.addEventListener("click", () => {
    slices.forEach((slice) => slice.classList.remove("active"));
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const slices = document.querySelectorAll(".slice");

  slices.forEach((slice) => {
    slice.addEventListener("click", (event) => {
      event.stopPropagation();

      // Define the mapping of tooltips to URLs
      const tooltipText = slice.querySelector(".tooltip").textContent.trim();
      const urlMap = {
        "Letter of Recommendation": "../../pages/blogs/under-construction.html",
        "Ongoing Projects": "../../pages/blogs/ongoing-projects.html",
        Resources: "../../pages/blogs/resources.html",
        Gallery: "../../pages/blogs/error.html",
      };

      if (urlMap[tooltipText]) {
        // Open the corresponding URL in a new tab
        // window.open(urlMap[tooltipText], "_blank");
        // Changed to same-tab navigation
        window.location.href = urlMap[tooltipText];
      }
    });
  });
});
