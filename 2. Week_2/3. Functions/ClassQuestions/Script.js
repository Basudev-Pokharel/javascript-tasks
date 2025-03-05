//Question no 1
// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 5));

// const add = (a, b) => a + b;
// console.log(add(10, 5));

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(10, 5));

//Question no 2
// const isEven = (x) => x % 2 == 0;
// console.log(isEven(8));

// const isEven = (x) => {
//   return x % 2 == 0;
// };
// console.log(isEven(9));

//Question no 3
// const getLength = (str) => str.length;
// console.log(getLength("Javascript"));

//Question no 4
// const capitalize = (str) =>
//   //   (str = str[0].toUpperCase() + str.substring(1).toLowerCase());
//   (str = str[0].toUpperCase() + str.slice(1));
// console.log(capitalize("hi how are you"));

//Question no 5
// const generateRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// console.log(generateRandomNumber(1, 10));

//Questions no 6
// const replaceWord = (sentence, oldWord, newWord) => {
//   console.log("Before changing: ", sentence);

//   let sent2 = sentence.replace(oldWord, newWord);
//   console.log("After changing: ", sent2);
// };
// replaceWord("Basu is happy", "happy", "cheerful");

//Question no 7
// const containsWord = (sentence, word) => {
//   return sentence.includes(word);
// };
// console.log(containsWord("I am learning Full stack Web developemnt", "Web"));

//Question no 8
// const roundNumber = (num, precision) => {
//   let result = num.toFixed(precision);
//   result = +result;
//   // result = Number(result);
//   return result;
// };
// console.log(roundNumber(10.9967, 1));
// console.log(roundNumber(19.56789, 2));
// console.log(roundNumber(20.11, 2));
// console.log(roundNumber(15.41765, 3));
// console.log(roundNumber(16.8988687, 4));
// console.log(roundNumber(89.2783483729, 5));

//Question no 9
// const findMax = (a, b, c) => {
//   return Math.max(a, b, c);
// };
// console.log(findMax(12, 7, 20));
// console.log(findMax(55, 44, 33));
// console.log(findMax(3, 7, 4));

//Question no 10
// function cleanAndTransform(str) {
//   str = str.trim().toLowerCase();
//   str.replace("powerful", "amazing");
//   return str;
// }
// console.log(cleanAndTransform("JavaScript is powerful! "));
