document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

function showSection(sectionId, button) {
    document.getElementById('ingredients').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';

    document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}