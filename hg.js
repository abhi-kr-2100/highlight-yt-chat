const authorNameSelector = "#author-name";
const waitTime = 2000;
const defaultHighlightColor = 'red';


keeping_an_eye_on = []


function highlight(name, color) {
    let authors = document.querySelectorAll(authorNameSelector);

    for (let i = 0; i < authors.length; ++i) {
        if (authors[i].textContent === name) {
            authors[i].style.backgroundColor = color;
        }
    }
}


function keep_an_eye_on(name, color = defaultHighlightColor) {
    keeping_an_eye_on[name] = setInterval(highlight, waitTime, name, color);
}


function clear(name) {
    if (name in keeping_an_eye_on) {
        clearInterval(keeping_an_eye_on[name]);
    }
}
