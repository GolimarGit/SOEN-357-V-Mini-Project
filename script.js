document.addEventListener("DOMContentLoaded", function () {
  const contentElement = document.getElementById("content");
  const navLinks = document.querySelectorAll(".navbar a");
  const submenuLinks = document.querySelectorAll(".navbar .submenu a");

  // Function to load content
  function loadContent(url) {
    if (!url) return; // Skip if URL is not provided
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        contentElement.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        contentElement.innerHTML =
          "<p>Error loading content. Please try again later.</p>";
      });
  }

  // Load default content
  loadContent("sections/user-research-persona-creation.html");

  // Add event listeners to navbar links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Toggle submenu visibility (if applicable)
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.toggle("active");
      }

      // Load section content
      const sectionUrl = this.getAttribute("data-section");
      loadContent(sectionUrl);

      // Scroll to the section header (if applicable)
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        setTimeout(() => {
          const targetElement = contentElement.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Small delay to allow content to load
      }
    });
  });

  // Add event listeners to submenu links
  submenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Scroll to the respective section in the main content
      const targetId = this.getAttribute("href");
      const targetElement = contentElement.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});