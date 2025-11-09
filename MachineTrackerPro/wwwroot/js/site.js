// Active Navigation Link on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link-custom")
    const sections = document.querySelectorAll("section")
    const bootstrap = window.bootstrap // Declare the bootstrap variable

    function updateActiveLink() {
        let currentSection = ""

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100
            const sectionHeight = section.clientHeight

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active")
            }
        })
    }

    window.addEventListener("scroll", updateActiveLink)

    // Smooth scroll for navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href")
            if (href.startsWith("#")) {
                e.preventDefault()
                const section = document.querySelector(href)
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" })
                }
            }
        })
    })

    // Handle Login Link
    const loginLink = document.querySelector('a[href="#login"]')
    if (loginLink) {
        loginLink.addEventListener("click", (e) => {
            e.preventDefault()
            const loginModal = new bootstrap.Modal(document.getElementById("loginModal"))
            loginModal.show()
        })
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add animation class based on data attribute
                if (entry.target.dataset.animation) {
                    entry.target.classList.add(entry.target.dataset.animation)
                }
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    // Observe all animated elements
    document.querySelectorAll("[data-animation]").forEach((el) => {
        observer.observe(el)
    })

    // Contact Form Handling
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Get form values
            const name = this.querySelector('input[placeholder="Your Name"]').value
            const email = this.querySelector('input[placeholder="Your Email"]').value
            const subject = this.querySelector('input[placeholder="Subject"]').value
            const message = this.querySelector("textarea").value

            // Simple validation
            if (name && email && subject && message) {
                // Here you would send the form data to your server
                alert("Thank you for your message! We will get back to you soon.")
                this.reset()
            } else {
                alert("Please fill in all fields.")
            }
        })
    }

    // Counter Animation for Numbers (Optional)
    const animateCounter = (element, target, duration = 2000) => {
        let current = 0
        const increment = target / (duration / 16)

        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                element.textContent = target
                clearInterval(timer)
            } else {
                element.textContent = Math.floor(current)
            }
        }, 16)
    }

    // Navbar transparency on scroll
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)"
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
        }
    })

    // Carousel auto-play control
    const carousel = document.querySelector("#bannerCarousel")
    if (carousel) {
        carousel.addEventListener("mouseenter", () => {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel)
            carouselInstance.pause()
        })

        carousel.addEventListener("mouseleave", () => {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel)
            carouselInstance.cycle()
        })
    }

    console.log("[v0] Website initialized successfully with smooth animations and active navigation")
})

// Add animation classes on page load for hero section
window.addEventListener("load", () => {
    document
        .querySelectorAll(".animate-slide-up, .animate-fade-in, .animate-slide-left, .animate-slide-right")
        .forEach((el) => {
            el.style.opacity = "1"
        })
})