function readForm(){
    document.getElementById('output').innerHTML='';
    let lastName =document.getElementById('lastName').value;
    let firstName =document.getElementById('firstName').value;
    if(lastName.length>0){
        document.getElementById('output').innerHTML += '<p>'+lastName+'</p>';
        document.getElementById('lastName').value = '';
    }
    if(firstName.length>0){
        document.getElementById('output').innerHTML += '<p>'+firstName+'</p>';
        document.getElementById('firstName').value='';
    }
}