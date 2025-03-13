/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

let library = [
  { title: "Power of Discipline", author: "Basudev", yearPublished: 2028 },
  { title: "Power of medicine", author: "Basudev", yearPublished: 2026 },
  { title: "Power of medication", author: "Basudev", yearPublished: 2029 },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/
console.log(library[0].title);
library[1].yearPublished = 2030;
console.log(library);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library[0].genres = "Health";
library[0]["isAvailable"] = true;
console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function Book(title, author, yearPublished, genres) {
  (this.title = title),
    (this.author = author),
    (this.yearPublished = yearPublished),
    (this.genres = genres);
}
let newBook = new Book("Coding", "Basu", 2045, "Coding");
console.log(newBook);
library.push(newBook);
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

function createBook(title, author, yearPublished, genres) {
  (this.title = title),
    (this.author = author),
    (this.yearPublished = yearPublished),
    (this.genres = genres);
}
let createnewBook = new createBook("Js", "Basu", 2060, ["Funny", "comdedy"]);
console.log(createnewBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
let stringified = JSON.stringify(library);
console.log(stringified);
console.log(JSON.parse(stringified));

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

let students = [
  { name: "Pc", age: 20, grade: 98 },
  { name: "Laptop", age: 32, grade: 93 },
  { name: "Mac", age: 34, grade: 92 },
  { name: "Samsung", age: 34, grade: 30 },
  { name: "Lenovo", age: 34, grade: 60 },
];
students.forEach((char) => {
  if (char.grade > 90) console.log(char.name);
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

let car = {
  brand: "Toyota",
  model: 2022,
  year: 2024,
  isElectric: true,
};
function checkElectic(object) {
  if (object.isElectric) {
    return "This car is eco-friendly!";
  } else {
    return "This car runs on fuel.";
  }
}
console.log(checkElectic(car));
/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

let movies = [
  { title: "Intersetller", director: "someone", rating: 8.4 },
  { title: "Alien", director: "somebody", rating: 7.6 },
  { title: "ReturnAlien", director: "Peter", rating: 8.2 },
  { title: "Love this days", director: "somebody", rating: 6 },
];
for (i of movies) {
  if (i.rating > 8) {
    console.log(i.title);
  }
}
/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

function findOldestCar(array) {
  array.sort((a, b) => a.year - b.year);
  return array[0];
}
// let cars = [
//   { year: 2010 },
//   { year: 2011 },
//   { year: 2045 },
//   { year: 2007 },   ///For testing answers
//   { year: 2005 },
// ];
// console.log(cars);
console.log(findOldestCar(cars));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

let userProfiels = [
  { username: "user", email: "user123@gmail.com", isAdmin: true },
  { username: "user2", email: "user2@gmail.com", isAdmin: false },
  { username: "user3", email: "user3@gmail.com", isAdmin: false },
];
function filterAdmin(array) {
  let variable;
  array.forEach((char) => {
    if (char.isAdmin) {
      variable = char.username;
    }
  });
  return variable;
}
console.log(filterAdmin(userProfiels));
/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

let orders = [
  {
    orderId: "12445",
    customerName: "Basu Pokharel",
    totalAmount: 5,
    status: "completed",
  },
  {
    orderId: "376863498",
    customerName: "random name",
    totalAmount: 8,
    status: "pending",
  },
  {
    orderId: "3243",
    customerName: "something more random",
    totalAmount: 5,
    status: "pending",
  },
  {
    orderId: "12232445",
    customerName: "something more random",
    totalAmount: 5,
    status: "pending",
  },
];
function filterCompleted(aray) {
  let variiiab;
  aray.forEach((char) => {
    if (char.status == "completed") {
      variiiab = char;
    }
  });
  return variiiab;
}
console.log(filterCompleted(orders));
/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

let smartphone = {
  brand: "Samsung",
  model: 2025,
  batteryLife: 99,
  is5GEnabled: true,
};
function CheckData(obj) {
  if (obj.is5GEnabled) {
    return "This phone supports 5G!";
  } else {
    return "This phone does not support 5G.";
  }
}
console.log(CheckData(smartphone));

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

let foc = {
  name: "FOx",
  age: 2,
  habitat: "Jungle",
};
function YoungChecker(obj) {
  if (obj.age < 3) {
    return "This fox is young";
  } else {
    return "This fox is an adult";
  }
}
console.log(YoungChecker(foc));

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

let employees = [
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
  {
    name: "Basu",
    position: "manager",
    salary: 5000,
  },
];

function totalSal(obj) {
  return obj.reduce((sum, each) => {
    return (sum += each.salary);
  }, 0);
}
console.log(totalSal(employees));
