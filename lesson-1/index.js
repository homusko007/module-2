'use strict';

const container = document.querySelector('.container');
const itemsAll = document.querySelector('.items'); // ol общий
const title = document.querySelectorAll('h2');
const propsList = document.querySelectorAll('.props__list'); // ol
const propsItem = document.querySelectorAll('.props__item'); //li


itemsAll.querySelector('.item:nth-child(5)').before(itemsAll.querySelector('.item'));

title[2].replaceWith(title[4]);

const h2 = document.createElement('h2');
const newTitle = document.createTextNode('This и прототипы объектов');
h2.append(newTitle);

title[3].replaceWith(h2);
title[5].replaceWith(title[2].cloneNode(true));
propsList[4].before(title[5].cloneNode(true));

propsItem[3].before(propsItem[14]);

propsList[2].append(propsList[5].children[8]);
propsList[2].append(propsList[5].children[8]);

const cloneItem = propsList[4].cloneNode(true);
propsList[4].replaceWith(propsList[3].cloneNode(true));
propsList[3].replaceWith(cloneItem);

document.querySelector('.ads').remove();
