document.addEventListener('DOMContentLoaded', () => {

    // Menu Mobile
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('#header .nav-menu');

    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu mobile ao clicar em um link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Slider de Depoimentos
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    let testimonialInterval; 

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextTestimonialAuto() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function startAutoplay() {
        if (testimonials.length > 1) {
            testimonialInterval = setInterval(nextTestimonialAuto, 7000);
        }
    }

    function stopAutoplay() {
        clearInterval(testimonialInterval);
    }

    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);
        startAutoplay(); 

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                stopAutoplay(); 
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
                startAutoplay(); 
            });
        }
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                stopAutoplay(); 
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentTestimonial);
                startAutoplay(); 
            });
        }
    }

    // Atualizar ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Header Fixo com mudança de fundo ao rolar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = 'var(--dark-bg-alt)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        }
    });

    // Inicialização do AOS já está no HTML, após o script do AOS.
});
