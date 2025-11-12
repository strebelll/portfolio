// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open');
            
            // Update aria-label for accessibility
            const isOpen = menu.classList.contains('open');
            menuToggle.setAttribute('aria-label', isOpen ? 'Menu schließen' : 'Menu öffnen');
            menuToggle.textContent = isOpen ? '✕' : '☰';
        });
        
        // Close menu when clicking on a menu link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('open');
                menuToggle.setAttribute('aria-label', 'Menu öffnen');
                menuToggle.textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('open');
                menuToggle.setAttribute('aria-label', 'Menu öffnen');
                menuToggle.textContent = '☰';
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});