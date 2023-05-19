'use strict'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const SALES = [120, 500, 350, 400, 600, 890, 450, 100, 250, 300, 650, 450]

function sumArray(arr){
    var sum = 0;
     
    // Running the for loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
     
    return sum;
}

document.writeln('<h1>Affichage vertical</h1><table>');
for (let i = 0; i < MONTHS.length; i++) {
    document.writeln('<tr><td>'+MONTHS[i]+'<td>'+SALES[i]+'</td></tr>')
    
}
document.writeln('<tr><th>Total</th><th>'+sumArray(SALES)+' $</th></tr></table>');

document.writeln('<h1>Affichage horizontal</h1><table><tr>');
for (let i = 0; i < MONTHS.length; i++) {
    document.writeln('<td>'+MONTHS[i]+'</td>')
    
}
document.writeln('<th>Total</th></tr><tr>')
for (let i = 0; i < SALES.length; i++) {
    document.writeln('<td>'+SALES[i]+'</td>')
    
}
document.writeln('<th>'+sumArray(SALES)+' $</th></tr></table>')

