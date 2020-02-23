window.onload = function () {
    let menuToggle = document.querySelector('.nav-links button');
    let nav = document.querySelector('nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    })
    let buttons = document.querySelectorAll('div.flex button');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            document.querySelector('div.flex').classList.add('active');
            for (j=0; j<buttons.length;j++) {
                buttons[j].parentElement.classList.remove('active');
            }
            this.parentElement.classList.add('active');
        })
    }
}