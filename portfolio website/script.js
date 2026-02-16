// Menu Toggle
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        let height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add("active");
        }
    });
});