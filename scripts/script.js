window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    })
}