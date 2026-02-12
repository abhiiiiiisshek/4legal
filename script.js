document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navUl = document.querySelector('nav ul');
    const navBtn = document.querySelector('nav .btn');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            const isMenuOpen = navUl.style.display === 'flex';
            if (isMenuOpen) {
                navUl.style.display = 'none';
                if (navBtn) navBtn.style.display = 'none';
            } else {
                navUl.style.display = 'flex';
                navUl.style.flexDirection = 'column';
                navUl.style.position = 'absolute';
                navUl.style.top = '100%';
                navUl.style.left = '0';
                navUl.style.width = '100%';
                navUl.style.backgroundColor = 'white';
                navUl.style.padding = '1rem';
                navUl.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';

                if (navBtn) {
                    navBtn.style.display = 'inline-block';
                    navBtn.style.marginTop = '1rem';
                    // Append btn to navUl for mobile structure if needed, or manage visibility
                    // For simplicity in this structure, we might need to adjust CSS or JS
                    navUl.appendChild(navBtn);
                }
            }
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // Contact Form Submission
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate submission
            window.location.href = 'thank-you.html';
        });
    });

    // Active Link Highlighting (Simple)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
