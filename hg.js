const authorNameSelector = "#author-id";
const waitTime = 2000;
const highlightColor = 'red';

function highlight(names, color) {
    let authors = document.querySelectorAll(authorNameSelector);
    for (let author in authors) {
        if (author.textContent in names) {
            author.style.backgroundColor = color;
        }
    }
}

function hg(names) {
    setInterval(() => highlight(names, highlightColor), waitTime);
}