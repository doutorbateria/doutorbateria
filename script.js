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

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentTestimonial);
            });
        }

        // Auto-slide (opcional)
        // setInterval(() => {
        //     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        //     showTestimonial(currentTestimonial);
        // }, 7000);
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


    // "Simulação" de envio de formulário de contato
    const contactForm = document.getElementById('web-contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = this.elements['name'].value;
            const email = this.elements['email_user'].value;
            const message = this.elements['message'].value;

            if (!name || !email || !message) {
                formStatus.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formStatus.style.color = 'red';
                return;
            }
            
            formStatus.textContent = 'Enviando sua mensagem...';
            formStatus.style.color = 'var(--title-color-on-light)';

            setTimeout(() => {
                formStatus.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                formStatus.style.color = 'green';
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);

            }, 2000);

            // const formData = new FormData(this);
            // const mailtoLink = `mailto:rafaelantonioalmeida192@gmail.com?subject=Contato Site Doutor Bateria: ${formData.get('name')}&body=Nome: ${formData.get('name')}%0AEmail: ${formData.get('email_user')}%0ATelefone: ${formData.get('phone_user') || 'Não informado'}%0A%0AMensagem:%0A${formData.get('message')}`;
            // console.log("Para enviar manualmente:", mailtoLink);
        });
    }

});
