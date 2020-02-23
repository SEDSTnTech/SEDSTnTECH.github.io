window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    let carousel = document.querySelector('.swipe');

    window.carousel = new Swipe(carousel, {
        startSlide: 0,
        draggable: true,
        autoRestart: false,
        continuous: true,
        disableScroll: true,
        stopPropagation: true,
    });
    let figures = document.querySelectorAll('.swipe figure')
    for (let i = 0; i < figures.length; i++) {
        let height = figures[i].querySelector('img').offsetHeight;
        let offset = (600 - height - 10) / 2;
        figures[i].style.top = offset + 'px';
    }
}
window.addEventListener('resize', function() {
    let figures = document.querySelectorAll('.swipe figure')
    for (let i = 0; i < figures.length; i++) {
        let height = figures[i].querySelector('img').offsetHeight;
        let offset = (600 - height) / 2;
        figures[i].style.top = offset + 'px';
    }
})