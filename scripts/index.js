window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
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
            let lightBox = document.createElement('figure');
            lightBox.innerHTML = this.innerHTML;
            lightBox.classList.add('light-box');

            let closeBtn = document.createElement('button');
                closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            closeBtn.classList.add('close');
            lightBox.appendChild(closeBtn);

            closeBtn.addEventListener('click', function () {
                this.parentElement.remove();
                document.body.classList.remove('lb-open');
            });

            document.body.appendChild(lightBox);
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