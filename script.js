$(document).ready(function() {
    $('.mobile-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.navitem');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px var(--color-primary-1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('.cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.prices', {
        origin: 'bottom',
        duration: 2000,
        distance: '30%'
    });

    ScrollReveal().reveal('.comments', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});

document.querySelectorAll('.btn-default-mobile').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});


