const menu = document.querySelector(".menu")
const button = document.querySelector(".menu-bar");

button.addEventListener("click", function() {
    menu.classList.toggle("show");
    // Toggle between menu and close icon
    if (button.classList.contains("ri-menu-4-line")) {
        button.classList.remove("ri-menu-4-line");
        button.classList.add("ri-close-line");
    } else {
        button.classList.remove("ri-close-line");
        button.classList.add("ri-menu-4-line");
    }
})

// Anchor Behaviour
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href').substring(1); // Get the ID without '#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 100; // Offset above the element
        const topPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
        });
      }
    });
  });
