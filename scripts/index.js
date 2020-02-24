window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    let carousel = document.querySelector('.swipe');

    let figures = document.querySelectorAll('.swipe figure');
    let elem = figures[0];
    let height = elem.querySelector('img').clientHeight;
    document.querySelector('.swipe').style.maxHeight = height + 4 + 'px';
    document.querySelector('.swipe-wrap').style.maxHeight = height + 4 + 'px';

    window.carousel = new Swipe(carousel, {
        startSlide: 0,
        draggable: true,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function () {
            let pos = window.carousel.getPos();
            let figures = document.querySelectorAll('.swipe figure');
            let elem = figures[pos];
            let height = elem.querySelector('img').clientHeight;
            document.querySelector('.swipe').style.maxHeight = height + 4 + 'px';
            document.querySelector('.swipe-wrap').style.maxHeight = height + 4 + 'px';
        }
    });
}

window.addEventListener('resize', function () {
    let pos = window.carousel.getPos();
    let figures = document.querySelectorAll('.swipe figure');
    let elem = figures[pos];
    let height = elem.querySelector('img').clientHeight;
    document.querySelector('.swipe').style.maxHeight = height + 4 + 'px';
    document.querySelector('.swipe-wrap').style.maxHeight = height + 4 + 'px';
})