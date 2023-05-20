function changeColor(){
   let color = document.getElementById('colorSelect').value
   document.getElementsByTagName('body')[0].style.backgroundColor=color;
}

document.getElementById('colorSelect').addEventListener('click',changeColor);