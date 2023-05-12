"use strict"

// /**
//  * HOMEWORK - PART I
//  */

// /**
//  * Make a program that calculates an employee’s gross salary for a week, 
//  * given their hourly rate and the number of hours worked. 
//  * Test with values: hourly rate= 20, hours worked = 25. The result shall be $500.
//  */

// let hourlyRate = prompt("Enter the hourly rate: ");
// let hoursWorked = prompt("Enter the hours worked: ");

// alert("The gross salary for the week is: "+hourlyRate*hoursWorked);

// /**
//  * Make a program that takes a temperature in degrees Fahrenheit (F) 
//  * and converts it into degrees Celsius (C). 
//  * Test with input value 70F, the result shall be 21.1C.
//  */

// let tempInF = prompt('Enter temperature in Fahrenheit');

// let tempInC = (tempInF - 32)*5/9;

// alert("The temperature in celsius is: "+tempInC);

// /**
//  * Make a program that displays the volume of a rectangular prism from the dimensions
//  *  of the prism. Test with input values width=20, height=3 and length=5, 
//  * the volume shall be 300
//  */

// let width = prompt('Enter the width of the prism: ');
// let height = prompt('Enter the height of the prism: ');
// let length = prompt('Enter the length of the prism: ');

// let volume = width*height*length;

// alert('The volume of the rectangular prism is: '+volume);

// /**
//  * A dealership selling new vehicles asks you to construct a program that calculates
//  *  the compensation paid to their salespeople. 
//  * The base salary for all the salespeople is $400. 
//  * For each vehicle sold, the salesperson receives a commission of $200. 
//  * Also, the salesperson receives a bonus of 5% of the total amount of all their sales.
// Compute the amount received for a salesperson based on the number 
// of vehicles and total sales. Test with values 10 vehicles sold and total sales of $250000. 
// The final salary (aka “compensation”) shall be $14900
//  */

// const BASE_SALARY = 400;
// const COMISSION_VEHICLE = 200;
// const BONUS_PERCENTAGE = 0.05;

// let totalSales = prompt('Enter the total amount of sales: ');
// let numberVehicles = prompt('Enter the amount of vehicles sold:');

// let salary = BASE_SALARY + numberVehicles*COMISSION_VEHICLE + BONUS_PERCENTAGE*totalSales;

// alert('Total salary is: $'+salary);

// /**
//  * We want to determine the height of a building of n floors, 
//  * knowing that the ground floor has a height of 6 meters and other
//  *  floors each have a height of 4 meters. Test with value 4 floors. 
//  * The result shall be 18 meters
//  */

// let floors = prompt('Enter the number of floors: ');

// let heightBuilding = 6 + (floors-1)*4;

// alert('The height of the building is: '+heightBuilding);

// /**
//  * An aircraft pilot wants to know the atmospheric pressure, expressed 
//  * in atmosphere units (atm), as the weather station only provides pressure data in 
//  * kilopascal units (kPa).
// 1 atm is equivalent to 101.325 kPa. Make a program that performs the conversion. 
// Test with  value 70 kPa, result shall be near 0.69 
//  */

// let pressureInKPa = prompt('Enter the pressure in kPa');
// let pressureInAtm= pressureInKPa/101.325;

// alert('The pressure in atm is: '+pressureInAtm);

// /**
//  * What will the following code display on the console ?
//  * let orderAmount = 130 // dollars
//        const TAX_PERCENT = 5 // in percent
//        let taxTotal = orderAmount * TAX_PERCENT / 100
//        let orderTotalWithTax = orderAmount + taxTotal
//        console.log("ex7 result:" + orderTotalWithTax)
//  */

// //Answer: 136.5

// /**
//  * Modify the program above to compute the final order total
//  *  (with tax) for an order of $150 and a tax rate of 6%. 
//  * The answer shall be $159
//  */

// let orderAmount=150;// dollars
// const TAX_PERCENT=6;// in percent
// let taxTotal=orderAmount*TAX_PERCENT/100;
// let orderTotalWithTax=orderAmount+taxTotal;
// console.log("ex7 result:"+orderTotalWithTax);

// /**
//  * 8 – Calculating sales tax in Québec: the Canadian government General Sales Tax (GST) 
//  * on a purchase is 5% of the order subtotal. The Quebec Provincial Sales Tax (PST) is 7.5% 
//  * computed after adding the GST, so PST=0.075*(order total+GST). 
//  * The order grand total is subtotal+GST+PST. 

// Make a program that reads the unit price of a product and the quantity purchased,
//  and then displays on the console: subtotal before taxes, the amount for the GST, 
//  the amount for PST, and the final total price including all taxes. 
//  Test with input values: unit price = 9$ and qty purchased = 3. 
//  The result shall be: order subtotal =27, GST = 1.35, PST= 2.13,
//   grand total=30.48. Use the toFixed(2) function to keep only 2 decimals 
//   for the grand total (this also converts the result into a string)
//  */

// let qty = prompt('Enter the amount of product');
// let price = prompt('Enter the price of the product');

// let subtotal = qty*price;
// let GSTAmount = subtotal*0.05;
// let PSTAmount = 0.075*(subtotal+GSTAmount);
// let grandTotal = (subtotal+GSTAmount+PSTAmount).toFixed(2);

// alert('Order subtotal: '+subtotal+'\n GST:'+GSTAmount+'\n PST:'+PSTAmount+'\n Grand total: '+grandTotal);

// /**
//  *     9 – In a computer technology course, the following evaluation weights are used:

//     • Laboratory work counts for 40% of the final grade
//     • The midterm exam counts for 25% of the final grade
//     • The final exam counts for 35% of the final grade

// Make a program that calculates the final grade of a student, 
// assuming that each of the three grades the user inputs is on 100. 
// Test with these values: Lab result 80%, Midterm Exam result 75% and Final Exam result 87%. 
// The final student grade for the course shall be 81.2%
//  */

// let labWork = prompt('Enter grade for lab work (between 0-100)');
// let midterm = prompt('Enter grade for midterm (between 0-100)');
// let finalExam = prompt('Enter grade for final exam (between 0-100)');

// let finalGrade = labWork*0.4 + 0.25*midterm + 0.35* finalExam;

// alert('Your final grade is: '+finalGrade);

/** HOMEWORK - PART II */

/**
 * Write a program that prints on the console a random number between 0 and 100 exclusively. 
 * The number doesn't have to be an integer. Each time the program is run a different 
 * value shall be displayed
 */

    let max = 100;
    let min=0;

    let random = (Math.random() * (max - min) + min);
   
   
   console.log("The random float in the range is:", parseFloat(random));

/**
 * Write a program that prints on the console an integer random number between 0 and 100 exclusively.
 *  Each time the program is run a different value shall be displayed
 */

let randomInt = Math.floor(Math.random() * (max - min) + min);

console.log('random number ',randomInt);