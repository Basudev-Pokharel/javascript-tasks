// Question no 1
numString1 = "42";
numString2 = "3.14";
numString1 = parseInt(numString1);
numString2 = parseFloat(numString2);
console.log("The integer is", numString1);
console.log("The floating point number is", numString2);
console.log(typeof numString1, typeof parseInt(numString1));

//Question no 2
let price = 19.56789;
console.log("Price with 2 decimals: ", price.toFixed(2));
console.log("The rounded value is ", Math.round(price));
console.log("The ceiled value is ", Math.ceil(price));
console.log("The floored value is ", Math.floor(price));
console.log("Price with no decimals: ", price.toFixed(0));

//Question no 3
let num1 = "10";
let num2 = "notANumber";
num1 = parseFloat(num1);
num2 = parseFloat(num2);
console.log(num1 + num2);

//Question no 4
let userInput = "25.75 apples";
userInput = parseFloat(userInput);
console.log(userInput.toFixed(1));

//Question no 5
let num = 5.67;
console.log("The rounded value is ", Math.round(num));
console.log("The rounded value is ", Math.ceil(num));
console.log("The rounded value is ", Math.floor(num));

//Quetion no 6
console.log("Your random number is", Math.floor(Math.random() * 10));

//Question no  7
let a = 12,
  b = 7,
  c = 20;
let max = Math.min(a, b, c);
let min = Math.max(a, b, c);
console.log(`The largest number is ${max}`);
console.log(`The largest number is ${min}`);
