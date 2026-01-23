const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Menú Hamburguesa básico
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Estilo simple para mostrarlo si se activa
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--dark-bg)';
        navLinks.style.padding = '1rem';
    });
}

// Efecto de menú que se reduce al scrollear
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Cuando se scrollea más de 50px
        nav.style.padding = '0rem 1rem'; // Reduce padding vertical (puedes cambiar a ' -0.2rem 1rem' si quieres más reducción)
    } else {
        nav.style.padding = '0rem 1rem'; // Vuelve al original
    }
});