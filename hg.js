const DEBUG = false;

const authorNameSelector = "#author-name";
const waitTime = 2000;
const highlightColor = 'red';

function highlight(names, color) {
    let authors = document.querySelectorAll(authorNameSelector);
    if (DEBUG) console.log(`${authors.length} people found...`);

    for (let i = 0; i < authors.length; ++i) {
        for (let j = 0; j < names.length; ++j) {
            if (DEBUG) console.log(`Looking for ${names[j]}...`);

            if (authors[i].textContent === names[j]) {
                if (DEBUG) console.log(`${authors[i].textContent} found...`);
                authors[i].style.backgroundColor = color;
                if (DEBUG) console.log(`${authors[i].textContent} highlighted!`);
            }
        }
    }
}

function hg(names) {
    setInterval(highlight, waitTime, names, highlightColor);
}