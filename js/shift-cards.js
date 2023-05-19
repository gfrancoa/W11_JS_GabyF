const cardContainer = document.getElementById('cards');

function shiftLeft() {
    let el = document.getElementsByTagName('img')[0];
    let newNode =  cardContainer.lastElementChild;
    cardContainer.insertBefore(newNode,el);
}

function shiftRight() {
    let el = document.getElementsByTagName('img')[0];
    let amountElements = document.getElementsByTagName('img').length;
    let newNode =  document.getElementsByClassName('img')[amountElements-1];
    cardContainer.insertBefore(el,newNode);
 }