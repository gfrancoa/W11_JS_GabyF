'use strict'

// Age to be considered an adult
const MAJOR = 18

// Four groups of ages
const AGES = [
    [25, 39, 51, 22, 15, 44],
    [25, 39, 51, 22, 55, 44],
    [25],
    [15]
]

function adultes(arr){
    let msg='';

    if(arr.filter(x=>x<18).length>0){
        msg='ne sont pas tous adultes';
    }
    else{
        msg='sont tous adultes';
    }
    return msg;
}

for (let i = 0; i < AGES.length; i++) {
    document.writeln('<tr><td> Groupe '+i+'</td><td> '+adultes(AGES[i])+'</td></tr>');
    
}
