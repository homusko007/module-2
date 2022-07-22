'use strict';

const ul = document.querySelector('ul');
let input;

const foo = () => {

    while (input !== null) {
        input = prompt('Введите: текст, либо  del,  clear, exit');
        if (input !== "") {
            if (input === 'del') {
                ul.lastElementChild.remove();
            } else if (input === 'clear') {
                ul.remove(NodeList);
            } else if (input === 'exit') {
                return;
            } else {
                const li = document.createElement('li');
                ul.append(li);
                li.textContent = input;
                console.log(li);
            }
        } else {
            foo()
        }
    }
}
foo();

