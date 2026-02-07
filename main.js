/*
 * UICA - United Innovation and Care Association
 * Main JavaScript
 * ==========================================
 */

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// ==========================================
// DOM Ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initProjectsGallery();
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Scroll Animations (IntersectionObserver)
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and other animatable elements
    document.querySelectorAll('.card, .project-card, .stat-item, .info-box').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ==========================================
// Contact Form Handling
// ==========================================
function initContactForm() {
    const form = document.querySelector('#contactForm, form[action="#"]');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Get form data
    const formData = {
        name: form.querySelector('[name="name"]')?.value?.trim(),
        email: form.querySelector('[name="email"]')?.value?.trim(),
        message: form.querySelector('[name="message"]')?.value?.trim()
    };

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
        showToast('Please fill in all fields', 'error');
        return;
    }

    if (!isValidEmail(formData.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        const data = await response.json();

        if (data.ok) {
            showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            throw new Error(data.message || 'Failed to send message');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        showToast('Failed to send message. Please try again later.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = 'info') {
    // Create container if it doesn't exist
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Icon based on type
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Add slideOutRight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Counter Animation for Stats
// ==========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Initialize counter animations when stats become visible
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// Utility: Debounce
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// Utility: Throttle
// ==========================================
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// Projects Gallery - Horizontal Scroll
// ==========================================
function initProjectsGallery() {
    const gallery = document.querySelector('.projects-gallery');
    const track = document.querySelector('.gallery-track');
    const slides = document.querySelectorAll('.project-slide');
    const progressBar = document.querySelector('.progress-bar');
    const progressDots = document.querySelectorAll('.progress-dot');

    if (!gallery || !track || slides.length === 0) return;

    // Update progress bar and dots on scroll
    function updateProgress() {
        const scrollLeft = gallery.scrollLeft;
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        const progress = Math.min(scrollLeft / maxScroll, 1);

        // Update progress bar
        if (progressBar) {
            progressBar.style.width = `${25 + (progress * 75)}%`;
        }

        // Update active dot
        const slideWidth = slides[0].offsetWidth + 48; // include gap
        const currentSlide = Math.round(scrollLeft / slideWidth);

        progressDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Throttled scroll handler
    gallery.addEventListener('scroll', throttle(updateProgress, 50), { passive: true });

    // Dot navigation
    progressDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const slideWidth = slides[0].offsetWidth + 48;
            gallery.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on scroll
    function updateParallax() {
        const scrollLeft = gallery.scrollLeft;

        slides.forEach((slide, index) => {
            const slideOffset = slide.offsetLeft - scrollLeft;
            const parallaxValue = slideOffset * 0.05;

            const image = slide.querySelector('.project-image');
            const shapes = slide.querySelectorAll('.shape');

            if (image) {
                image.style.transform = `translateX(${parallaxValue}px)`;
            }

            shapes.forEach((shape, shapeIndex) => {
                const shapeParallax = parallaxValue * (0.3 + shapeIndex * 0.2);
                shape.style.transform = `translate(${shapeParallax}px, ${shapeParallax * 0.5}px)`;
            });
        });
    }

    gallery.addEventListener('scroll', throttle(updateParallax, 16), { passive: true });

    // 3D Tilt effect on mouse move
    slides.forEach(slide => {
        const wrapper = slide.querySelector('.project-image-wrapper');
        if (!wrapper) return;

        slide.addEventListener('mousemove', (e) => {
            const rect = slide.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        slide.addEventListener('mouseleave', () => {
            wrapper.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Keyboard navigation
    gallery.setAttribute('tabindex', '0');
    gallery.addEventListener('keydown', (e) => {
        const slideWidth = slides[0].offsetWidth + 48;

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            gallery.scrollBy({ left: slideWidth, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            gallery.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
    });

    // Touch swipe enhancement
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const slideWidth = slides[0].offsetWidth + 48;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - go next
                gallery.scrollBy({ left: slideWidth, behavior: 'smooth' });
            } else {
                // Swipe right - go previous
                gallery.scrollBy({ left: -slideWidth, behavior: 'smooth' });
            }
        }
    }

    // Entrance animation for slides
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.transform = 'translateY(50px)';
        slide.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        slideObserver.observe(slide);
    });

    // Auto-scroll hint animation (only on first load)
    setTimeout(() => {
        const scrollHint = document.querySelector('.scroll-hint');
        if (scrollHint && gallery.scrollLeft === 0) {
            // Small nudge to show scrollability
            gallery.scrollTo({ left: 50, behavior: 'smooth' });
            setTimeout(() => {
                gallery.scrollTo({ left: 0, behavior: 'smooth' });
            }, 500);
        }
    }, 2000);

    // Initial update
    updateProgress();
}
