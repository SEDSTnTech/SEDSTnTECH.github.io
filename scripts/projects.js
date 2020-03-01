window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    })
    let rocketSwipe = document.querySelector('#RocketryTeam .swipe');
    window.rocketSwipe = new Swipe( rocketSwipe, {
        startSlide: 0,
        auto: 4000,
        draggable: true,
        autoRestart: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
    });
    let balloonSwipe = document.querySelector('#BalloonTeam .swipe');
    window.balloonSwipe = new Swipe( balloonSwipe, {
        startSlide: 0,
        auto: 4000,
        draggable: true,
        autoRestart: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
    });
    let teleSwipe = document.querySelector('#RadioAndTelescope .swipe');
    window.teleSwipe = new Swipe( teleSwipe, {
        startSlide: 0,
        auto: 4000,
        draggable: true,
        autoRestart: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
    });
}