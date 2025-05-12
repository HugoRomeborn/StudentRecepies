// En funktion som aktiverar och deaktiverar hamburgermenyn
document.addEventListener("DOMContentLoaded", function () { // en eventlistener som startar funktionen
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");    // sätter nav_links som active och de visas
    });
});

// Funktionen ser till att rätt sektion av receptet visas, instruktioner eller ingridienser
function showSection(sectionId, button) {   
    document.getElementById('ingredients').style.display = 'none';  // nollställer/gömmer båda sektionerna
    document.getElementById('instructions').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';  // visar den section man vill

    document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active')); // ändrar utseende för knappen så att den markerar vilken som visas
    button.classList.add('active');
}