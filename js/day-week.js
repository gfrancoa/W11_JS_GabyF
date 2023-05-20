function changeDay(){
    let day = document.getElementById('dayNumber').value
    let lang = document.querySelector('#language:checked')
    let label = document.querySelector('label[for="dayNumber"]');

    if(lang){
        switch (day) {
            case '0':
                label.innerHTML = 'Monday'
                break;
            case '1':
                label.innerHTML = 'Tuesday'
                break;
            case '2':
                label.innerHTML = 'Wednesday'
                break;
            case '3':
                label.innerHTML = 'Thursday'
                break;
            case '4':
                label.innerHTML = 'Friday'
                break;
            case '5':
                label.innerHTML = 'Saturday'
                break;
            case '6':
                label.innerHTML = 'Sunday'
                break;
            default:
                label.innerHTML='Unknown'
                break;
        }
    }else{
        switch (day) {
            case '0':
                label.innerHTML = 'Lundi'
                break;
            case '1':
                label.innerHTML = 'Mardi'
                break;
            case '2':
                label.innerHTML = 'Mercredi'
                break;
            case '3':
                label.innerHTML = 'Jeudi'
                break;
            case '4':
                label.innerHTML = 'Vendredi'
                break;
            case '5':
                label.innerHTML = 'Samedi'
                break;
            case '6':
                label.innerHTML = 'Dimanche'
                break;
            default:
                label.innerHTML='Unknown'
                break;
        }
    }
 }
 
 document.getElementById('dayNumber').addEventListener('change',changeDay);
 document.getElementById('language').addEventListener('change',changeDay);