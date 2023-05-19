let content = document.getElementById('elementContent').value;
let tag = document.getElementById('elementType').value;

function createWithInnerHTML(){
    document.getElementById('output').innerHTML+='<'+tag+' class=\'inner-html\'>'+content+'</'+tag+'>';
}
function createWithCreateElement(){
   let myDiv= document.createElement('div');
    myDiv.classList.add('create-element');
    myDiv.innerHTML=content;
    document.getElementById('output').insertAdjacentElement('afterend',myDiv);
}