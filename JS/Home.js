// En funktion som aktiverar och deaktiverar hamburgermenyn
document.addEventListener("DOMContentLoaded", function () { // en eventlistener som startar funktionen
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // sätter nav_links som active och de visas
    });
});