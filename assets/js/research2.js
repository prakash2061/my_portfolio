// Request Access Modal Functions for Research Page
function openRequestModal() {
    const modal = document.getElementById('requestModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  
  function closeRequestModal() {
    const modal = document.getElementById('requestModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  // Add event listener to "Request Access" buttons
  document.addEventListener('DOMContentLoaded', () => {
    const requestButtons = document.querySelectorAll('.read-more[data-action="request-access"]');
    requestButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        openRequestModal();
      });
    });
  
    // Close modal when clicking outside or on the close button
    const modal = document.getElementById('requestModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('request-modal-close')) {
          closeRequestModal();
        }
      });
    }
  });