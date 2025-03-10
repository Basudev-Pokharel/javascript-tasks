// Exercise 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
function myAlphabetLength(array) {
  return array.length >= 5
    ? console.log("Array length is sufficient")
    : console.log("Array length is too short.");
}
console.log(myAlphabetLength(myAlphabet));

// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
planets.forEach((char, index) => {
  console.log(`Planet: ${char}, Index: ${index}`);
});

// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
mixedValues.forEach((char, index) => {
  console.log(`Item: ${char}, Index: ${index}, Type:${typeof char}`);
});

// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, "Dog", 3.14, false];

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
myArr.forEach((char) => console.log(char));
// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/

// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ["Lion", "Tiger", "Panda"];

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
animalNames.forEach((char) => {
  console.log(`Letters in '${char}': ${char.split("").join(", ")}`);
});

// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
function getPositiveTemperatures(array) {
  return array.filter((char) => char > 0);
}
console.log(getPositiveTemperatures(temperatures));
// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/

console.log(`Index of Fox: ${zooAnimals.indexOf("Fox")}`);
// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
console.log(`Index of Zebra: ${zooAnimals.indexOf("Zebra")}`);

// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/

zooAnimals.splice(1, 1, "Cheetah");
console.log(zooAnimals);

// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/

safariAnimals.sort();
// console.log(safariAnimals);

// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
safariAnimals.reverse();

// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// console.log(zooAnimals.includes("Tiger"));

// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/

let count = [];
attendees.forEach((char, idx) => {
  if (char == "John") {
    count.push(idx);
  }
});
console.log(count);
// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/

let uppercaseArray = attendees.map((char) => {
  return char.toUpperCase();
});
console.log(uppercaseArray);

// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/

let mergetArray = forestAnimals.concat(farmAnimals);
console.log(mergetArray);

// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ["Eagle", "Owl", "Hawk", "Sparrow", "Penguin"];

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);

// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/

numbers.splice(2, 1, 25, 27);
console.log(numbers);
// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/

let newArray2 = prices.map((char) => {
  return char + 0.1 * char;
});
console.log(newArray2);
// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ["apple", "banana", "cherry", "kiwi", "strawberry"];

/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
let filteredArray = words.filter((char) => {
  return char.length > 5;
});
console.log(filteredArray);
