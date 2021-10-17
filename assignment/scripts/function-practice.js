console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(myName){
  return `Hello, ${myName}!`;
}
console.log(helloName('Jo'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ){
  return firstNumber + secondNumber;
}

console.log(addNumbers( 1, 2 ));
console.log(addNumbers( -55, 100));
console.log(addNumbers(0, 0));
// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(2, 3, 4));
console.log(multiplyThree(44, 12, 50));
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number){
  if (number > 0){
    return true;
  }
    return false;
}
console.log(isPositive(5));
console.log(isPositive(-17));
console.log(isPositive(0));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let firstArray = [1, 16, 55, 20];
let testArray = []
function getLast(array) {
let lastItem = array.pop();

if (array.length === 0) {
  return "undefined";
}
return lastItem;
}
console.log(getLast(firstArray));
console.log(getLast(testArray));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let myArray = [15, 50, 799];
let yourArray = [75, 76, 77];

function find( value, array ) {
let i = 0;
let superValue = array[i];

  for (i=0; i<array.length; i++){
    if (value === superValue)
    return true;
  } return false;
  }

 console.log(find(75, myArray));
 console.log(find(75, yourArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let i = 0;
  let stringTwo = string[0];

  if (letter === stringTwo) {
    return true;
  } return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let sumArray = [50, 56.4, .999]

function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumAll(sumArray));
console.log(sumAll(myArray));
console.log(sumAll(testArray));
console.log(sumAll(yourArray));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let stretchArray = [-5, -3, 0, 7, 10];
let freshArray = [];
let array = [-4, -2, 0, 12, 20]

function allPos(){
  for (let i=0; i<stretchArray.length; i++){
    if (stretchArray[i]>0){
      freshArray.push(freshArray[i]);
      //return freshArray;
      // } else if (freshArray.length === 0){
    //   return [];
     }
  }
}

// function allPos(array){
//   let newArray = [];
//
//   for (let i=0; i<array.length; i++) {
//     if (array[i] > 0) {
//     newArray.push(array[i]);
//    } else if (newArray.length === 0) {
//      return [];
//    }
// }
// }
// console.log(allPos(stretchArray));
// console.log(allPos(myArray));
// console.log(allPos(sumArray));
//allPos(array);
console.log(allPos(array));
allPos(stretchArray);
console.log(allPos(stretchArray));
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
