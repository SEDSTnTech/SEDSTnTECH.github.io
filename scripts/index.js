window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    let closeBtn = document.querySelector('figure.light-box button.close')
    closeBtn.addEventListener('click', function () {
        document.body.classList.remove('lb-open');
        document.querySelector('.light-box figcaption').innerHTML = '';
    });

    let carousel = document.querySelector('.swipe');

    let figures = document.querySelectorAll('.swipe figure');
    let elem = figures[0];
    let height = elem.clientHeight;
    document.querySelector('.swipe').style.maxHeight = height + 'px';
    document.querySelector('.swipe-wrap').style.maxHeight = height + 'px';

    for (let i = 0; i < figures.length; i++) {
        figures[i].querySelector('img').setAttribute('title','Click to expand');

        figures[i].addEventListener('click', function () {
            let figcaption = document.querySelector('.light-box figcaption');
            let img = document.querySelector('.light-box img');
            img.src = this.querySelector('img').src;
            if(this.querySelector('figcaption') !== null) figcaption.innerHTML = this.querySelector('figcaption').innerHTML;
            document.body.classList.add('lb-open')
        })
    }

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
            let height = elem.clientHeight;
            document.querySelector('.swipe').style.maxHeight = height + 'px';
            document.querySelector('.swipe-wrap').style.maxHeight = height + 'px';
        }
    });
}

window.addEventListener('resize', function () {
    let pos = window.carousel.getPos();
    let figures = document.querySelectorAll('.swipe figure');
    let elem = figures[pos];
    let height = elem.clientHeight;
    document.querySelector('.swipe').style.maxHeight = height + 'px';
    document.querySelector('.swipe-wrap').style.maxHeight = height + 'px';
})