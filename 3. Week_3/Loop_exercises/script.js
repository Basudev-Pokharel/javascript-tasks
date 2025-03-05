//Question no 1
// const logOddNumbers = () => {
//   for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//   }
// };

// logOddNumbers();

//Question no 2
// const logEvenNumbers = () => {
//   for (i = 2; i < 100; i += 2) {
//     console.log(`${i}, ${100 - i}`);
//   }
// };
// logEvenNumbers();

//Question no 3
// function calculateAverageSpeed() {
//   let distance;
//   let time;
//   while (distance != 0) {
//     distance = prompt("Enter your distance: ");
//     if (distance == 0) {
//       break;
//     }
//     time = prompt("Enter your time: ");
//     let speed = distance / time;
//     console.log(speed);
//   }
// }
// calculateAverageSpeed();

//Question no 4
// const counEvenNumbers = () => {
//   let a;
//   let count = 0;
//   for (i = 1; i <= 20; i++) {
//     a = prompt(`Enter your ${i}th Number: `);
//     if (a % 2 == 0) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// counEvenNumbers();

//Question no 5
// const calculateAverageUntilZero = () => {
//   let input;
//   let count = 0;
//   let sum = 0;
//   while (input != 0) {
//     input = Number(prompt("Enter your number: "));
//     sum = sum + input;
//     count++;
//   }
//   console.log(sum / (count - 1));
// };
// calculateAverageUntilZero();

//Question no 6
// const askToContinue = () => {
//   let decision = "y";
//   while (decision === "y") {
//     let number = prompt("Enter a number:");
//     decision = prompt("Do you want to continue giving numbers? (y/n): ");
//     console.log(number);
//   }
// };
// askToContinue();

//Question no 7
// const sumAndAverage = () => {
//   let number;
//   let count = 0;
//   let sum = 0;
//   let min = Infinity,
//     max = -Infinity;
//   for (i = 1; i <= 10; i++) {
//     number = Number(prompt("Enter your number: "));
//     sum = sum + number;
//     count++;
//     max = Math.max(max, number);
//     min = Math.min(min, number);
//   }
//   let avg = sum / count;
//   console.log(sum);
//   console.log(avg);
//   console.log(min, max);
// };
// sumAndAverage();

//Question no 8
// function findMinMax() {
//   let min = Infinity,
//     max = -Infinity;
//   let number = prompt("How many numbers you want to enter: ");
//   let userNum;
//   for (let i = 1; i <= number; i++) {
//     userNum = Number(prompt(`Enter ${i}st Number: `));
//     min = Math.min(min, userNum);
//     max = Math.max(max, userNum);
//   }
//   console.log(max, min);
// }
// findMinMax();

//Question no 9
// const sumFromOneToHundred = () => {
//   let sum = 0;
//   for (i = 1; i <= 100; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// };

// sumFromOneToHundred();

//Question no 10
// const countdownTimer = () => {
//   let input = Number(prompt("Enter your number to show decending order: "));
//   for (let i = input; i >= 1; i--) {
//     console.log(i);
//   }
//   console.log("Time's up");
// };
// countdownTimer();

//Question no 11
// const generateMultiplicationTable = () => {
//   let number = prompt("Enter your number here:");
//   for (i = 1; i <= 10; i++) {
//     console.log(`${number} X ${i} = ${number * i}`);
//   }
// };
// generateMultiplicationTable();

//Question no 12
// const buildGroceryList = () => {
//   let grocery;
//   while (grocery != "done") {
//     grocery = prompt("Enter your grocery items name: ");
//     console.log(grocery);
//   }
// };
// buildGroceryList();

//Question no 13
// const validatePassword = () => {
//   let password;
//   while (password != "correct123") {
//     password = prompt("Enter your password:");
//     if (password == "correct123") {
//       console.log("Access granted!");
//     }
//   }
// };
// validatePassword();

//Question no 14// I need to ask I cannot do it
const createWordPyramid = () => {
  let word = prompt("Enter your word: ");
  for (i = 0; i < word.length; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += word[j];
    }
    console.log(str);
  }
};
createWordPyramid();
