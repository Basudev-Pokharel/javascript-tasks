console.log("Hello World");
//Question no 1
let a = "Single quoted string";
let b = "Double quoted string";
let c = `Backticks quoted string`;
console.log(a, "\n", b, "\n", c);

//Question no 2
var language = "Javascript";
var string = `I am learning ${language}.`;
console.log(string);

//Question no 3
let multiline = `This is line one.
This is line two.
This is line three.`;
console.log(multiline);

//Question no 4
var text = "Hello world!";
textLength = text.length;
console.log("The length of the text is", textLength);

//Question no 5
var lang = "JavaScript";
console.log("The first cahracter is", lang[0], ".");
console.log("The last cahracter is", lang[9], ".");

//Question no 6
var num1 = 7;
var num2 = 5;
let str = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(str);

//Question no 7
let greeting = "Hello, World!";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

//Question no 8
let sentence = "Learning Javascript is fun!";
console.log("Extracted word:", sentence.substring(9, 19));

//Question no 9
let word = "Javascript";
console.log("first character: ", word[0]);
console.log("Last character: ", word[word.length - 1]);

//Question no 10
let messyString = "     Clean me up!    ";
console.log(messyString);
console.log("Cleaned string up", messyString.trim());

//Question no 11
let phrase = "JavaScript is versatile and powerful";
console.log("Does the phrase include 'powerful'?", phrase.includes("powerful"));

//Question no 12
let texxt = "I like apples.";
console.log("I like", texxt.replace("apples", "bananas"));

//Question no 13
let longText = "The quick brown fox jumps over the lazy dog";
console.log("Sliced text:", longText.slice(4, 20));

//Question no 14
let description = "Javascript is Fun and powerful!";
// console.log(description.trim());
description = description.toLocaleLowerCase();
bool = description.includes("fun");
description = description.replace("powerful", "amazing");
console.log("Final description: ", description);
console.log("Does it include 'fun'?: ", bool);

//string subtraction: Doesn't work as I expected to work as number but not true esentially
let str1 = "Hello world";
let str2 = "Hello";
console.log(`${str1 - str2}`);
