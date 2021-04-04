const authorNameSelector = "#author-name";
const waitTime = 2000;
const defaultHighlightColor = 'red';


function highlight(names, color) {
    let authors = document.querySelectorAll(authorNameSelector);

    for (let i = 0; i < authors.length; ++i) {
        for (let j = 0; j < names.length; ++j) {

            if (authors[i].textContent === names[j]) {
                authors[i].style.backgroundColor = color;
            }
        }
    }
}


function keep_an_eye_on(names, color = defaultHighlightColor) {
    setInterval(highlight, waitTime, names, color);
}