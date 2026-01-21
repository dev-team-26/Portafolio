const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Menú móvil
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animaciones de entrada con Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));