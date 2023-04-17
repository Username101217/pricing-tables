const basic = document.querySelector('.basic');
const intermediate = document.querySelector('.intermediate');
const advance = document.querySelector('.advance');
const ceo = document.querySelector('.ceo');
const table = document.querySelector('article');

const basicName = document.querySelector('.basic-name');
const intName = document.querySelector('.int-name');
const advName = document.querySelector('.adv-name');
const ceoName = document.querySelector('.ceo-name');

const basicPrice = document.querySelector('.basic-price');
const intPrice = document.querySelector('.int-price');
const advPrice = document.querySelector('.adv-price');
const ceoPrice = document.querySelector('.ceo-price');


basic.addEventListener('mouseover', basicAdd);
function basicAdd() {
    basic.classList.add('bchange1');
    basicName.classList.add('bchange2');
    basicPrice.classList.add('bchange3');
}
basic.addEventListener('mouseout', basicRev);
function basicRev() {
    basic.classList.remove('bchange1');
    basicName.classList.remove('bchange2');
    basicPrice.classList.remove('bchange3');
}

intermediate.addEventListener('mouseover', intAdd);
function intAdd() {
    intermediate.classList.add('ichange1');
    intName.classList.add('ichange2');
    intPrice.classList.add('ichange3');
}
intermediate.addEventListener('mouseout', intRev);
function intRev() {
    intermediate.classList.remove('ichange1');
    intName.classList.remove('ichange2');
    intPrice.classList.remove('ichange3');
}

advance.addEventListener('mouseover', advAdd);
function advAdd() {
    advance.classList.add('achange1');
    advName.classList.add('achange2');
    advPrice.classList.add('achange3');
}
advance.addEventListener('mouseout', advRev);
function advRev() {
    advance.classList.remove('achange1');
    advName.classList.remove('achange2');
    advPrice.classList.remove('achange3');
}

ceo.addEventListener('mouseover', ceoAdd);
function ceoAdd() {
    ceo.classList.add('cchange1');
    ceoName.classList.add('cchange2');
    ceoPrice.classList.add('cchange3');
}
ceo.addEventListener('mouseout', ceoRev);
function ceoRev() {
    ceo.classList.remove('cchange1');
    ceoName.classList.remove('cchange2');
    ceoPrice.classList.remove('cchange3');
}
