window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    menuToggle.addEventListener('click', function() {
        let nav = document.querySelector('nav');
        nav.classList.toggle('open');
    })
}