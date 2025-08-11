const sections = [
        '.logo',
        '.portada',
        '.menufotos',
        '.ubicacion',
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Mejor rendimiento
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('scroll-effect');
            observer.observe(el);
        });
    });

    // === Navbar efecto al hacer scroll ===
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // === Toggle menú responsive ===
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        document.querySelectorAll('.navbar ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
            });
        });
    }