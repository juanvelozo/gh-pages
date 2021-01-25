// Scroll Reveal
window.sr = ScrollReveal();
    sr.reveal('.banner-text', {
        duration: 2000,
        origin: 'top',
        distance: '-100px'
    });
    sr.reveal('.responsive', {
        delay: 600,
        origin: 'top',
        distance: '-100px',
        duration: 2000,
    });

    sr.reveal('.skills-img__1', {
        delay:400,
        duration: 1300,
        origin: 'top',
        distance: '-100px'
    });
    sr.reveal('.skills-img__2', {
        delay:600,
        duration: 1300,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.skills-img__3', {
        delay:800,
        duration: 1300,
        origin: 'top',
        distance: '-100px'
    });
    sr.reveal('.skills-img__4', {
        delay:1000,
        duration: 1300,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.experience-img__1', {
        delay: 600,
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.experience-img__2', {
        duration: 2000,
        origin: 'top',
        distance: '-100px'
    });
    sr.reveal('.experience-img__3', {
        delay: 600,
        duration: 1400,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.experience-img__4', {
        delay: 600,
        duration: 1400,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.experience-img__5', {
        delay: 600,
        duration: 1400,
        origin: 'right',
        distance: '-100px'
    });
    sr.reveal('.gallery-img__1', {
        delay: 600,
        duration: 2700,
        origin: 'left',
        distance: '-100px'
    });
    sr.reveal('.gallery-img__2', {
        delay: 600,
        origin: 'top',
        distance: '-100px',
        duration: 2700,

    });
    sr.reveal('.gallery-img__3', {
        delay: 600,
        origin: 'right',
        distance: '-100px',
        duration: 2700,
    });
    sr.reveal('.gallery-img__6', {
        delay: 600,
        origin: 'top',
        distance: '-100px',
        duration: 2000,
    });

// back to top btn
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});

$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
