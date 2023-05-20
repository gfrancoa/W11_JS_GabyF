function changeNumber(){
    let number = document.getElementById('numberInput').value
    document.querySelector('#numberDiv img').setAttribute('src','image/'+number+'.jpg');
 }
 
 document.getElementById('numberInput').addEventListener('change',changeNumber);