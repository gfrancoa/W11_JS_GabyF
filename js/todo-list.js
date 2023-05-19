

function addNewLiElement(){
    let content = document.getElementById('textBox').value;
    if(content.length>0)
    document.getElementById('liste').innerHTML += '<li>'+content+'</li>';
    document.getElementById('textBox').value='';
}

function deleteLastLiElement(){
    let numberLi = document.getElementsByTagName('li').length;
    if(numberLi>0)
    document.getElementsByTagName('li')[numberLi-1].remove();
}