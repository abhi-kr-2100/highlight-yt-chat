const DEBUG = false;

const authorNameSelector = "#author-name";
const waitTime = 2000;
const highlightColor = 'red';

function highlight(names, color) {
    let authors = document.querySelectorAll(authorNameSelector);
    if (DEBUG) console.log(`${authors.length} people found...`);

    for (let author in authors)
        for (let name in names)
            if (author.textContent === name) {
                if (DEBUG) console.log(`${author.textContent} found...`);
                author.style.backgroundColor = color;
                if (DEBUG) console.log(`${author.textContent} highlighted!`);
            }
}

function hg(names) {
    setInterval(highlight, waitTime, names, highlightColor);
}