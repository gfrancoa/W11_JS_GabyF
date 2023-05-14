/**EXERCISES - PART 1 */

let numbers=[45,33,9,67,22];

/**
 * Write a function printArray(numbers) that displays all the numbers 
 * of the array on the console.
 */

function printArray(numbers){
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

console.log('--1--');
printArray(numbers);

/**
 * Write a function getFirst(numbers) returning the first number
 *  of the array. With numbers above shall return 45
 */

function getFirst(numbers){
    return numbers[0];
}

console.log('--2--');
console.log(getFirst(numbers));

/**
 * Write a function getLast(numbers) returning the last number
 *  of the array. With numbers above shall return 22
 */

function getLast(numbers){
    return numbers.slice(-1)[0];
}
console.log('--3--');
console.log(getLast(numbers));

/**
 * Write a function getAverage(numbers) returning the average of
 *  all numbers. With numbers above shall return 35.2
 */

function getAverage(numbers){
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }
    return sum/numbers.length;
}

console.log('--4--');
console.log(getAverage(numbers));

/**
 * Write a function getMin(numbers) returning the smallest number
 *  in the array. With numbers above shall return 9
 */
function getMin(numbers){
    let min = null;
    for (let i = 0; i < numbers.length; i++) {
        if(min==null){
            min = numbers[i];
        }
        if(min>numbers[i]){
            min = numbers[i];
        }
    }

    return min;
}

console.log('--5--');
console.log(getMin(numbers));

/**
 * Write a function getMax(numbers) returning the highest number
 *  in the array. With numbers above shall return 67
 */
function getMax(numbers){
    let max = null;
    for (let i = 0; i < numbers.length; i++) {
        if(max==null){
            max = numbers[i];
        }
        if(max<numbers[i]){
            max = numbers[i];
        }
    }

    return max;
}

console.log('--6--');
console.log(getMax(numbers));
