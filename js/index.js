window.sr = ScrollReveal();

    sr.reveal('.gallery', {
        duration: 2700,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.gallery-img__1', {
        delay: 600,
        duration: 2700,
        origin: 'left',
        distance: '-200px'
    });
    sr.reveal('.gallery-img__2', {
        delay: 1400,
        origin: 'top',
        distance: '-200px',
        duration: 2700,

    });
    sr.reveal('.gallery-img__3', {
        delay: 900,
        origin: 'right',
        distance: '-200px',
        duration: 2700,
    });