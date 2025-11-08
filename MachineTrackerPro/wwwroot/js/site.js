// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




        // Animated Counter
    function animateCounter() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;
                const timer = setInterval(() => {
        count += increment;
                    if (count >= target) {
        counter.textContent = target;
    clearInterval(timer);
                    } else {
        counter.textContent = Math.floor(count);
                    }
                }, 20);
            });
        }

    // Trigger counter animation when about section is visible
    const aboutSection = document.getElementById('about');
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
        });
    observer.observe(aboutSection);

    // Gallery Filter
    function filterGallery(e, category) {
            const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

            buttons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
    item.style.animation = 'zoomIn 0.6s ease';
                } else {
        item.style.display = 'none';
                }
            });
}




    // Carousel Dots
    function currentSlide(n) {
            const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'));
    carousel.to(n);
        }

    // Update dots when carousel slides
    const carousel = document.getElementById('heroCarousel');
    carousel.addEventListener('slide.bs.carousel', function (e) {
            const dots = document.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.remove('active'));
    dots[e.to].classList.add('active');
        });

    // Scroll to Top Button
    const scrollTop = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
        scrollTop.classList.add('show');
            } else {
        scrollTop.classList.remove('show');
            }
        });

        scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
        });

        // Active Navigation Link on Scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`a[href="#${section.id}"]`);
    if (activeLink) activeLink.classList.add('active');
                }
            });
        });

    // Form Submit Handler
    function handleSubmit(e) {
        e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
        }
