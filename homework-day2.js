/**
 * You work for a salary of 14$ per hour. But if you work more than 40 hours in a week, 
 * the extra hours are paid overtime at 1.5 x your salary. Write a function getSalary(nbHours)
 *   to compute your expected paycheck based on the number of hours you worked. 
 */

function getSalary(nbHours){
    const HOUR_VALUE = 14;
    const MAX_HOURS=40;

    let salary=0;
    if(nbHours>MAX_HOURS){
        salary= HOUR_VALUE*MAX_HOURS + (nbHours-MAX_HOURS)*HOUR_VALUE*1.5;
    }
    else{
        salary=HOUR_VALUE*nbHours;
    }

    return salary;
}

let salaryEarned= getSalary(44) // worked 44 hours this week
console.log("Your salary is " + salaryEarned)  // must print 644
salaryEarned = getSalary(30) // worked 30 hours this week
console.log("Your salary is " + salaryEarned)  // must print 420

/**
 * Write a function to compute the total expense at the restaurant given the base price of the meal, 
 * the %15 tax and a 15% tip to the waiter. The tip is 15% of meal base price +tax. 
 * The result shall be rounded to 2 decimals.
 */

function getMealTotal(mealPrice){
    const TAX_TIP = 0.15;
    return ((mealPrice*(1+TAX_TIP))*(1+TAX_TIP)).toFixed(2);

}
console.log('---2--');
let totalExpense = getMealTotal(67) // meal itself is $67 
console.log(totalExpense)  // must print 88.61

/**
 * Write a function getLetterGrade(grade)  
 * returning the letter grade for a student, given their grade in percentage
 */

function getLetterGrade(grade){
    let letter = '';

    if (grade>=90) {
        letter='A';
    } else if(grade>=80) {
        letter='B';
    } else if (grade>=70){
        letter='C';
    }else if(grade>=60){
        letter='D';
    }else{
        letter='F'
    }

    return letter;
}
console.log('---3--');
let letterGrade = getLetterGrade(70) // 70%
console.log(letterGrade)  // must print C
letterGrade = getLetterGrade(90) // 90%
console.log(letterGrade)  // must print A

/**
 * A picture sharing service charges 5 cents per image for the first 100 download. 
 * For any subsequent downloads, they charge 3 cents each. Write a function 
 * getPicturesCost(nbPics) to computes the total cost for any given input number 
 * nbPics of downloads.
 */

function getPicturesCost(nbPics){
    let pictureCost=0;
    const MAX_PICS=100;
    if(nbPics>MAX_PICS){
        pictureCost=MAX_PICS*0.05 + (nbPics-MAX_PICS)*0.03;
    }else{
        pictureCost=nbPics*0.05;
    }

    return pictureCost;
}

console.log('---4--');
let cost = getPicturesCost(70) // 70 downloads
console.log(cost)  // must print 3.5
cost= getPicturesCost(130) // 130 downloads
console.log(cost)  // must print 5.90

/**
 * An electricity bill is calculated based on the number of days for
 *  which power was supplied, and how many kilowatt-hours (kWh) were consumed.
 *  First there is a fixed rate of $0.50 per day for the service, whatever the amount
 *  of power consumed.  Then the first 200 kWh consumed are charged at $0.30 per kWh.
 *  For the remaining consumption above 200 kWh, the rate is $0.20 per kWh.
 *  Write a function getElectricityTotal(nbDays,nbKWh) to compute the total amount
 *  for the bill based on the number of days nbDays and number of kilowatts nbKWh. 
 */

function getElectricityTotal(nbDayS,nbKWh){
    let consumption=0;
    const FIXED_RATE=0.5;
    const MAX_KWH=200;

    let consumptionDays = FIXED_RATE*nbDayS;

    if(nbKWh>MAX_KWH){
        consumption=0.3*MAX_KWH + (nbKWh-MAX_KWH)*0.2 + consumptionDays;
    } else{
        consumption=0.3*nbKWh + consumptionDays
    }

    return consumption;
}

console.log('---5--');
let elecCost = getElectricityTotal(60, 180) // 60 days and 180 kWh
console.log(elecCost)  // must print 84
elecCost = getElectricityTotal(60, 350) // 60 days and 350 kWh
console.log(elecCost)  // must print 120

/**
 * Write a function getMax(n1,n2,n3) that return the greatest of 3 numbers. 
 */
function getMax(n1,n2,n3) {
    let largest;

    if(n1 >= n2 && n1 >= n3) {
        largest = n1;
    }
    else if (n2 >= n1 && n2 >= n3) {
        largest = n2;
    }
    else {
        largest = n3;
    }

    return largest;
}

console.log('--6--');
console.log(getMax(8,52,34)) // must print 52
console.log(getMax(108,52,34)) // must print 108
console.log(getMax(8,52,65)) // must print 65

/**
 * Write a function sortAsc(n1,n2,n3) 
 * that displays 3 numbers in ascending (increasing) order on the console.
 */
function sortAsc(x,y,z){
    let sorted='';
    if (x<y && x<z)
{
        if (y<z)
        {
            sorted=x + ", " + y + ", " +z;
        }
        else
        {
            sorted=x + ", " + z + ", " +y;
        }
}
else if (y<x && y <z)
{
        if (x<z)
        {
             sorted=y + ", " + x + ", " +z;
        }
        else
        {
             sorted=y + ", " + z + ", " +x;
        }
}
else if (z<x && z<y)
{
        if (x<y)
        {
            sorted=z + ", " + x + ", " +y;
        }
        else
        {
            sorted=z + ", " + y + ", " +x;
        }
} 
console.log(sorted);
}
console.log('--7--');
sortAsc(34,356,999) // all show on console 34, 356, 999
sortAsc(356,34,999)
sortAsc(999,356,34)
sortAsc(34,999,356)

/**
 * Write a function to display on the console the integer numbers from 0 to 5.
 */
function showNumbersFor(){
    
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

console.log('--8a--');
showNumbersFor();

function showNumbersDoWhile(){
   
    let i=0;
    do {
        console.log(i);
        i++;
    } while (i<=5);
}

console.log('--8b--');
showNumbersDoWhile();

function showNumbersWhile(){
    
    let i=0;
    while(i<=5){
        console.log(i);
        i++;
    }
}

console.log('--8c--');
showNumbersWhile();

/**
 * Write a function displayBetween(n1,n2)  
 * to display on the console the integer numbers between any two numbers. 
 */

/**
 * Make sure the function displayBetween(n1,n2)  works when n1>n2 ! 
 * In that case we want to display the numbers in descending order. 
 */

function displayBetween(n1,n2){
    
    if(n1<n2){
        for (let i = n1; i <= n2; i++) {
            console.log(i);
            
        }
    }
    else if(n1>n2){
        for (let i = n1; i >= n2; i--) {
            console.log(i);
            
        }
    }
    else{
        console.log('check range');
    }
}

console.log('-- 9 & 10-- test1');
displayBetween(5,10);
console.log('-- 9 & 10-- test2');
displayBetween(10,5);

/**
 * Write a function sumBetween(n1,n2) that calculates the sum of all the integers 
 * contained between two numbers. For example the sum of the integers between 5 and 10,
 *  inclusively, is 5+6+7+8+9+10=45
 */

function sumBetween(n1,n2){
    let sum=0;
    for (let i = n1; i <= n2; i++) {
        sum+=i;
        
    }

    return sum;
}

console.log('-- 11 --');
let total = sumBetween(5,10)
console.log(total)  // must print 45
total = sumBetween(8,12) 
console.log(total)  // must print 50

/**
 * Make a function cityWelcome() that prompts the user to enter a city name using a prompt box
 *  with a default value "Montreal". Display a different welcome message for each city using
 *  a switch statement and an alert box. You must also handle the case where the user clicks
 *  cancel or types nothing in the prompt box.
 */

function cityWelcome(){
    let city = prompt('Enter the city','Montreal');
    let msg= 'Welcome from ';
    if(city==null){
        console.log('User cancelled action');
        return;
    }
    switch (city) {
        case 'Montreal':
            msg+='Montreal, Quebec';
            break;
        case 'Alexandria':
            msg+='Alexandria, Ontario';
            break;
        case 'Montreal':
            msg+='Sherbrooke, Quebec';
            break;
        case 'Saint-Justine-de-Newton':
            msg+='Saint-Justine-de-Newton, Quebec';
            break;
        case '':
            msg='Please enter a city';
            break;
        default:
            msg='City unknown';
            break;
    }
    alert(msg);
}

cityWelcome();



