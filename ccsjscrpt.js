document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.cheat-section').forEach(section => {
      section.addEventListener('click', () => {
        section.classList.toggle('active');
      });
    });
  });
  