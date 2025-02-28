// For Gallery in Research Page

let currentGallery = null;
let currentIndex = 0;

// Lightbox Controls
function openLightbox(galleryElement) {
  currentGallery = galleryElement;
  currentIndex = 0;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
  currentGallery = null;
}

function changeSlide(direction) {
  const images = currentGallery.querySelectorAll(".gallery-images img");
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const images = currentGallery.querySelectorAll(".gallery-images img");
  const lightboxImg = document.querySelector(".lightbox-img");
  const counter = document.querySelector(".lightbox-counter");

  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
  counter.textContent = `${currentIndex + 1}/${images.length}`;
}

// Event Listeners for Image Gallery
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".research-images").forEach((gallery) => {
    gallery.addEventListener("click", () => {
      openLightbox(gallery);
    });
  });

  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("lightbox").classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") changeSlide(-1);
      if (e.key === "ArrowRight") changeSlide(1);
    }
  });

  // Touch Support
  let touchStartX = 0;
  const lightboxElement = document.getElementById("lightbox");

  lightboxElement.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  lightboxElement.addEventListener(
    "touchend",
    (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) changeSlide(1);
        else changeSlide(-1);
      }
    },
    { passive: true }
  );
});