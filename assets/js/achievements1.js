// Certificate Modal Functionality
let currentIndex = 0;
const certificateModal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");


// Initialize certificates by group {IMP, to view certificates on}
const certificates = {
  sia: document.querySelectorAll('[data-event-group="sia"] img'),
  iasc: document.querySelectorAll('[data-event-group="iasc"] img'),
  soty: document.querySelectorAll('[data-event-group="soty"] img'),
  gps: document.querySelectorAll('[data-event-group="gps"] img'),
  scGOV: document.querySelectorAll('[data-event-group="scGOV"] img'),
  scMnS: document.querySelectorAll('[data-event-group="scMnS"] img'),
  wsw: document.querySelectorAll('[data-event-group="wsw"] img'),
  interview: document.querySelectorAll('[data-event-group="interview"] img'),
  miscellaneous: document.querySelectorAll('[data-event-group="miscellaneous"] img'),
};

// Event Photos Configuration
const eventPhotos = {
  //============== (1)
  sia: {
    selector: '#siaPhotos img',
    images: [
      '../assets/img/events/sia-event-1.jpg',
      '../assets/img/events/sia-event-2.jpg',
      '../assets/img/events/sia-event-3.jpg',
      '../assets/img/events/sia-event-4.jpg',
      '../assets/img/events/sia-event-5.jpg',
      '../assets/img/events/sia-event-6.jpg',
      '../assets/img/events/sia-event-7.jpg'
    ]
  },
  //============== (2)
  iasc: {
    selector: '#iascPhotos img',
    images: [
      '../assets/img/events/iasc-event-1.png',
      '../assets/img/events/iasc-event-2.png',
      '../assets/img/events/iasc-event-3.png',
      '../assets/img/events/iasc-event-4.png',
      '../assets/img/events/iasc-event-5.png',
      '../assets/img/events/iasc-event-6.png',
      '../assets/img/events/iasc-event-7.png',
      '../assets/img/events/iasc-event-8.png',
      '../assets/img/events/iasc-event-9.png',
      '../assets/img/events/iasc-event-10.png',
      '../assets/img/events/iasc-event-11.png',
      '../assets/img/events/iasc-event-12.png',
      '../assets/img/events/iasc-event-13.png',
      '../assets/img/events/iasc-event-14.png',
      '../assets/img/events/iasc-event-15.png',
    ]
  },
  //============== (3)
  soty: {
    selector: '#sotyPhotos img',
    images: [
      '../assets/img/events/soty-event-1.jpg',
      '../assets/img/events/soty-event-2.jpg'
    ]
  },
  //============== (4)
  gps: {
    selector: '#gpsPhotos img',
    images: [
      '../assets/img/events/gps-event-1.png',
      '../assets/img/events/gps-event-2.png',
      '../assets/img/events/gps-event-3.png',
      '../assets/img/events/gps-event-4.png',
      '../assets/img/events/gps-event-5.png',
    ]
  },
  //============== (5)
  scGOV: {
    selector: '#scGOVPhotos img',
    images: [
      '../assets/img/events/scGOV-event-1.jpg',
      '../assets/img/events/scGOV-event-2.jpg',
      '../assets/img/events/scGOV-event-3.jpg',
      '../assets/img/events/scGOV-event-4.jpg',
      '../assets/img/events/scGOV-event-5.jpg',
      '../assets/img/events/scGOV-event-6.jpg',
      '../assets/img/events/scGOV-event-7.jpg',
      '../assets/img/events/scGOV-event-8.jpg',
      '../assets/img/events/scGOV-event-9.jpg',
      '../assets/img/events/scGOV-event-10.jpg',
      '../assets/img/events/scGOV-event-11.jpg',
      '../assets/img/events/scGOV-event-12.jpg',
      '../assets/img/events/scGOV-event-13.jpg',
      '../assets/img/events/scGOV-event-14.jpg',
      '../assets/img/events/scGOV-event-15.jpg',
      '../assets/img/events/scGOV-event-16.jpg',
      '../assets/img/events/scGOV-event-17.jpg',
      '../assets/img/events/scGOV-event-18.jpg',
      '../assets/img/events/scGOV-event-19.png',
      '../assets/img/events/scGOV-event-20.png',
      '../assets/img/events/scGOV-event-21.png',
      '../assets/img/events/scGOV-event-22.png',
      '../assets/img/events/scGOV-event-23.png',
    ]
  },
  //============== (6)
  scMnS: {
    selector: '#scMnSPhotos img',
    images: [
      '../assets/img/events/scMnS-event-1.jpg',
      '../assets/img/events/scMnS-event-2.jpg',
      '../assets/img/events/scMnS-event-3.jpg',
      '../assets/img/events/scMnS-event-4.jpg',
      '../assets/img/events/scMnS-event-5.jpg',
      '../assets/img/events/scMnS-event-6.jpg',
      '../assets/img/events/scMnS-event-7.jpg',
      '../assets/img/events/scMnS-event-8.jpg'
    ]
  },
  //============== (7) 
  wsw: {
    selector: '#wswPhotos img',
    images: [
      '../assets/img/events/wsw-event-1.jpg',
      '../assets/img/events/wsw-event-2.jpg',
      '../assets/img/events/wsw-event-3.jpg',
      '../assets/img/events/wsw-event-4.jpg'
    ]
  },
  //============== (8)
  interview: {
    selector: '#interviewPhotos img',
    images: [
      '../assets/img/events/interview-event-1.jpg',
      '../assets/img/events/interview-event-2.jpg',
      '../assets/img/events/interview-event-3.jpg',
      '../assets/img/events/interview-event-4.jpg',
      '../assets/img/events/interview-event-5.jpg',
      '../assets/img/events/interview-event-6.jpg',
      '../assets/img/events/interview-event-7.jpg',
      '../assets/img/events/interview-event-8.jpg',
      '../assets/img/events/interview-event-9.jpg',
      '../assets/img/events/interview-event-10.jpg',
      '../assets/img/events/interview-event-11.jpg',
      '../assets/img/events/interview-event-12.jpg',
      '../assets/img/events/interview-event-13.jpg',
      '../assets/img/events/interview-event-14.jpg',
      '../assets/img/events/interview-event-15.jpg'
    ]
  },
  //============== (9)
  miscellaneous: {
    selector: '#miscellaneousPhotos img',
    images: [
      '../assets/img/events/test1.png',
    ]
  }, 
};

let currentEventType = null;

// Certificate Modal Functions
function updateCertificateCounter() {
  const certificateCounter = document.getElementById("certificateCounter");
  certificateCounter.textContent = `${currentIndex + 1} / ${certificates.length}`;
}

function openModal(index) {
  currentIndex = index;
  modalImg.src = certificates[index].src;
  certificateModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  certificateModal.classList.remove("zoomed");
  updateCertificateCounter();
}

function closeModal() {
  certificateModal.style.display = "none";
  document.body.style.overflow = "auto";
  certificateModal.classList.remove("zoomed");
}

function changeImage(step) {
  currentIndex = (currentIndex + step + certificates.length) % certificates.length;
  modalImg.src = certificates[currentIndex].src;
  certificateModal.classList.remove("zoomed");
  updateCertificateCounter();
}

// Event Photos Modal Functions
function openEventPhotosModal(eventType) {
  currentEventType = eventType;
  const modal = document.getElementById('eventPhotosModal');
  
  // Hide all photo groups
  document.querySelectorAll('.event-photos-content').forEach(el => {
    el.style.display = 'none';
  });
  
  // Show relevant photos
  document.querySelector(eventPhotos[eventType].selector)
    .parentElement.style.display = 'grid';
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeEventPhotosModal() {
  const modal = document.getElementById('eventPhotosModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event Photo Viewer Functions
let currentEventPhotoIndex = 0;
const eventPhotoViewerModal = document.getElementById("eventPhotoViewerModal");
const eventPhotoViewerImage = document.getElementById("eventPhotoViewerImage");

function updateEventPhotoCounter() {
  const eventPhotoCounter = document.getElementById("eventPhotoCounter");
  const images = eventPhotos[currentEventType].images;
  eventPhotoCounter.textContent = `${currentEventPhotoIndex + 1} / ${images.length}`;
}

function openEventPhotoViewer(index) {
  const images = eventPhotos[currentEventType].images;
  currentEventPhotoIndex = index;
  eventPhotoViewerImage.src = images[index];
  eventPhotoViewerModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  updateEventPhotoCounter();
}

function closeEventPhotoViewer() {
  eventPhotoViewerModal.style.display = "none";
  document.body.style.overflow = "auto";
  eventPhotoViewerModal.classList.remove("zoomed");
}

function changeEventPhoto(step) {
  const images = eventPhotos[currentEventType].images;
  currentEventPhotoIndex = (currentEventPhotoIndex + step + images.length) % images.length;
  eventPhotoViewerImage.src = images[currentEventPhotoIndex];
  eventPhotoViewerModal.classList.remove("zoomed");
  updateEventPhotoCounter();
}

// Unified Zoom Handlers
function handleZoom(event, modalElement) {
  event.stopPropagation();
  modalElement.classList.toggle("zoomed");
}

// Touch and Mobile Handling
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let lastTap = 0;
let touchStartX = 0;
let touchStartY = 0;

if (isMobile) {
  certificateModal.addEventListener("touchend", handleMobileTap);
  eventPhotoViewerModal.addEventListener("touchend", handleMobileTap);
}

function handleMobileTap(e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;

  if (tapLength < 500 && tapLength > 0) {
    const modal = e.target.closest('.modal');
    handleZoom(e, modal);
    e.preventDefault();
  }
  lastTap = currentTime;
}

// Swipe Handling
function handleSwipe(e) {
  const modal = e.target.closest('.modal');
  if (modal.classList.contains("zoomed")) return;

  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) > 50) {
    if (modal === certificateModal) {
      changeImage(deltaX > 0 ? -1 : 1);
    } else if (modal === eventPhotoViewerModal) {
      changeEventPhoto(deltaX > 0 ? -1 : 1);
    }
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize touch events
  certificateModal.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  eventPhotoViewerModal.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  certificateModal.addEventListener("touchend", handleSwipe);
  eventPhotoViewerModal.addEventListener("touchend", handleSwipe);

  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (certificateModal.style.display === "flex") {
      switch(e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          changeImage(-1);
          break;
        case "ArrowRight":
          changeImage(1);
          break;
      }
    }
    if (eventPhotoViewerModal.style.display === "flex") {
      switch(e.key) {
        case "Escape":
          closeEventPhotoViewer();
          break;
        case "ArrowLeft":
          changeEventPhoto(-1);
          break;
        case "ArrowRight":
          changeEventPhoto(1);
          break;
      }
    }
  });

  // Click Outside Handling
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        if (modal === certificateModal) closeModal();
        if (modal === eventPhotosModal) closeEventPhotosModal();
        if (modal === eventPhotoViewerModal) closeEventPhotoViewer();
      }
    });
  });

  // Zoom Handlers
  document.getElementById('modalImage').addEventListener("click", (e) => {
    handleZoom(e, certificateModal);
  });

  document.getElementById('eventPhotoViewerImage').addEventListener("click", (e) => {
    handleZoom(e, eventPhotoViewerModal);
  });
});

// Mobile Double-tap Prevention
document.documentElement.addEventListener("touchstart", (e) => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });



// Modified openModal function
function openModal(eventGroup, index) {
  currentEventGroup = eventGroup;
  currentIndex = index;
  
  // Update modal content
  modalImg.src = certificates[eventGroup][index].src;
  certificateModal.style.display = "flex";
  
  // Update counter
  certificateCounter.textContent = `${index + 1} / ${certificates[eventGroup].length}`;
}

// Modified changeImage function
function changeImage(step) {
  const group = certificates[currentEventGroup];
  currentIndex = (currentIndex + step + group.length) % group.length;
  modalImg.src = group[currentIndex].src;
  certificateCounter.textContent = `${currentIndex + 1} / ${group.length}`;
}