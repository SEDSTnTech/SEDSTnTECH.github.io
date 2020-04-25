window.onload = function () {
    let images = document.querySelectorAll('img');
    for (i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            let element = this;
            document.body.classList.add('input');
            let divInput = document.createElement('div');
                divInput.classList.add('input');
            let description = document.createElement('div');
                description.innerText = "Name of file, should be in " + element.dataset.src + " directory";
            let input = document.createElement('input');
            input.type = "text";

            let button = document.createElement('button');
                button.classList.add('markup');
            button.innerText = 'Set Path';
            button.addEventListener('click', function () {
                element.setAttribute('onerror', 'fallback(this)');
                element.src = element.dataset.src + input.value;
                this.parentElement.remove();
                document.body.classList.remove('input');
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    button.click();
                }
            })
            divInput.appendChild(description);
            divInput.appendChild(input);
            divInput.appendChild(button);
            document.body.appendChild(divInput);
            input.focus();
        })
    }
    let batsu = document.querySelector('button.batsu');
        batsu.addEventListener('click', function() {
            this.parentElement.remove();
        });
    let buttons = document.querySelectorAll('button.markup');
    for( i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            document.body.classList.add('input');
            let markup = this.previousElementSibling.cloneNode(true);
            markup.querySelector('img').removeAttribute("onerror");
            markup.querySelector('img').removeAttribute("data-src");
            let buttons = markup.querySelectorAll('button');
            for (j=0; j<buttons.length; j++) {
                buttons[j].remove();
            }
            let spans = markup.querySelectorAll('span');
            for (j=0; j<spans.length; j++) {
                spans[j].parentElement.innerHTML = spans[j].parentElement.innerText;
            }

            let taDiv = document.createElement('div');
                taDiv.classList.add('textarea');
            let textarea = document.createElement('div');
                textarea.setAttribute('spellcheck','false');
                textarea.innerText = markup.outerHTML.toString();

            document.body.appendChild(textarea);
            let button = document.createElement('button');
                button.innerText = 'Close';
                button.classList.add('markup');
                button.addEventListener('click', function() {
                    this.parentElement.remove();
                    document.body.classList.remove('input');
                })
                taDiv.appendChild(textarea);
            taDiv.appendChild(button);
            document.body.appendChild(taDiv);
        })
    }
}

function fallback(element) {
    element.removeAttribute('onerror');
    element.src='';
}