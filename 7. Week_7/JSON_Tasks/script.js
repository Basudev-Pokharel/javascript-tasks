/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

let student = {
  name: "Abdul",
  age: 31,
  grade: 4,
};
console.log(typeof student);
let objectJson = JSON.stringify(student);
console.log(typeof objectJson);
console.log(objectJson);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

let backObj = JSON.parse(objectJson);
console.log(backObj.name);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

let classroom = [
  { name: "Tony", age: 30, grade: 5 },
  { name: "Mony", age: 21, grade: 4 },
  { name: "Pony", age: 33, grade: 5 },
  { name: "Gony", age: 26, grade: 3 },
];
let json = JSON.stringify(classroom);
console.log(typeof json);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

let backArr = JSON.parse(json);
console.log(typeof backArr);
backArr.forEach((element) => {
  console.log(element.name);
});

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

let weatherReport = {
  temperature: 31,
  humidity: 1,
  conditions: "Rainy",
};
console.log(typeof weatherReport);
let weatherJSON = JSON.stringify(weatherReport);
let parseBack = JSON.parse(weatherJSON);
console.log(parseBack.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

let movies = [
  { title: "RRR", director: "SSR", rating: 8.1 },
  { title: "Intersetller", director: "someone", rating: 9 },
  { title: "Avater", director: "Newton", rating: 8 },
  { title: "Jumangi", director: "Rock", rating: 7.9 },
];
let moviesStr = JSON.stringify(movies);
let parseBack = JSON.parse(moviesStr);
parseBack.forEach((element) => {
  if (element.rating > 8) {
    console.log(element.rating);
  }
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

function fulterHighRatedMovies(stringify) {
  let object = JSON.parse(stringify);
  let newArray = object.filter((element) => {
    return element.rating > 8;
  });
  console.log(newArray);
}
fulterHighRatedMovies(moviesStr);

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

let shoppingCart = {
  items: [
    {
      name: "Biscuit",
      price: 9,
    },
    {
      name: "Choco",
      price: 3,
    },
    {
      name: "coffee",
      price: 1,
    },
    {
      name: "Toffee",
      price: 3,
    },
  ],
};
let srting = JSON.stringify(shoppingCart);
console.log(srting);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

function totalCartValue(string) {
  let object = JSON.parse(string);
  return object.items.reduce((sum, element) => {
    return (sum += element.price);
  }, 0);
}
console.log(totalCartValue(srting));

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

let gameProgress = {
  level: 7,
  score: 99,
  livesRemaining: 3,
};
let stringVer = JSON.stringify(gameProgress);
console.log(stringVer);

let objeect = JSON.parse(stringVer);
objeect.score += 100;
console.log(objeect);
