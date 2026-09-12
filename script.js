// ========================================
// IEEE RAS VIT CHENNAI
// JAVASCRIPT
// ========================================


// Get the menu button
const menuToggle = document.querySelector(".menu-toggle");


// Get the navigation menu
const navLinks = document.querySelector(".nav-links");


// Get all navigation links
const links = document.querySelectorAll(".nav-links a");


// ========================================
// OPEN / CLOSE MOBILE MENU
// ========================================

menuToggle.addEventListener("click", function () {

    // Add or remove "active"
    navLinks.classList.toggle("active");


    // Check whether menu is open
    const isOpen = navLinks.classList.contains("active");


    // Update accessibility information
    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    // Update button description
    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


// ========================================
// CLOSE MENU AFTER CLICKING A LINK
// ========================================

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// ========================================
// CLOSE MENU WITH ESCAPE KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        menuToggle.focus();

    }

});


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "IEEE RAS VIT Chennai website loaded successfully."
);
/* =================================
   SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
  ".section, .focus-strip, footer"
);

const revealObserver = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});