const nameSelector = "#author-name";
const waitTime = 2000;
const defaultColor = 'red';

let targets = []

function highlight(name, color) {
    let users = document.querySelectorAll(nameSelector);

    for (let i = 0; i < users.length; ++i)
        if (users[i].textContent === name)
            users[i].style.backgroundColor = color;
}

function eye(name, color = defaultColor) {
    targets[name] = setInterval(highlight, waitTime, name, color);
}

function clear(name) {
    if (name in targets)
        clearInterval(targets[name]);
}
