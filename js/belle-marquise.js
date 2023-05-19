'use strict'

const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
]

let theDiv = document.createElement('div');
let htmlContent = "<ul>" // start an HTML numbered list 
       
            htmlContent += "<li>"
            htmlContent += tableau[0]+VIRGULE+tableau[1]+VIRGULE+tableau[2]+VIRGULE+tableau[3]+'.';
            htmlContent += "</li>"

            htmlContent += "<li>"
            htmlContent += tableau[1]+VIRGULE+tableau[0]+VIRGULE+tableau[3]+VIRGULE+tableau[2]+'.';
            htmlContent += "</li>"

            htmlContent += "<li>"
            htmlContent += tableau[3]+VIRGULE+tableau[2]+VIRGULE+tableau[0]+VIRGULE+tableau[1]+'.';
            htmlContent += "</li>"

            htmlContent += "<li>"
            htmlContent += tableau[2]+VIRGULE+tableau[0]+VIRGULE+tableau[3]+VIRGULE+tableau[1]+'.';
            htmlContent += "</li>"
        
        htmlContent += "</ul>" // end the HTML numbered list 
        // put HTML code inside the div with innerHTML 
        theDiv.innerHTML = htmlContent;

        document.getElementsByTagName('h1')[0].insertAdjacentElement('afterend',theDiv);