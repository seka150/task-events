export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.append(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', function (e) {
            e.target.setAttribute('title', e.target.textContent);
        });

        ul.append(li);
    });

    document.body.append(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    a.addEventListener('click', function (e) {
        if (!a.textContent.includes(a.href)) {
            e.preventDefault();
            a.textContent += ' ' + a.href;
        }
    });

    document.body.append(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.append(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.textContent += '!';
        }
    });

    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });

    document.body.append(ul);
    document.body.append(button);
}
