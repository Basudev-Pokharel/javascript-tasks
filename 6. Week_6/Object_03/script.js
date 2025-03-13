/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/
function user(username, email) {
  (this.username = username), (this.email = email);
  // (this.showInfo = function () {
  //   console.log(username, email);
  // });
}
user.prototype.showInfo = function () {
  console.log(this.username, this.email);
};
let user1 = new user("Tony", "Tony123@gmail.com");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class userSecond {
  constructor(username, email) {
    (this.username = username), (this.email = email);
  }
  showInfo = function () {
    console.log(username, email);
  };
  changeEmail(newmail) {
    this.email = newmail;
  }
}
let user2 = new userSecond("Mony", "munnu123@gmail.com");
user2.changeEmail("Hei123@gmail.com");

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/
let body = document.getElementsByTagName("body");
let btn = document.getElementById("Class3");
btn.onclick = () => {
  if (!theme.isActive) {
    document.body.style.backgroundColor = "black";
    theme.isActive = true;
  } else {
    document.body.style.backgroundColor = "white";
    theme.isActive = false;
  }
};

const theme = {
  name: "light",
  isActive: true,
};

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let counter = {
  value: 0,
};
increaseBtn.onclick = () => {
  counter.value++;
};
decreaseBtn.onclick = () => {
  counter.value--;
};
console.log(counter);
/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

let product = {
  name: "Toothbrush",
  price: 4,
  quantity: 5,
};
let quantity = document.getElementById("quantity");
let quanBtn = document.getElementById("input_done");
quanBtn.onclick = () => {
  product.quantity = quantity.value;
  console.log("Total is", product.price * product.quantity);
};

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

function Task(title, description, completed) {
  (this.title = title),
    (this.description = description),
    (this.completed = completed);
}
let Tasks = [];
let task6Btn = document.getElementById("task6");
let taskDisplay = document.getElementById("task-display");
task6Btn.onclick = () => {
  Tasks.push(new Task("Read Book", "About meditation", 2024));
  Tasks.forEach((task) => {
    let p = document.createElement("p");
    p.innerText = `${task.title}, ${task.description}, ${task.completed}`;
    taskDisplay.appendChild(p);
  });
};

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherApp = {
  city: 45,
  fetchWeather: function (city) {
    console.log(this.city);
  },
};
// console.log(weatherApp.fetchWeather(city));
/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

function Car(brand, model, year) {
  (this.brand = brand),
    (this.model = model),
    (this.year = year),
    (this.age = function () {
      return this.year - this.model;
    });
}
let newCar = new Car("Tesla", 2021, 2025);
console.log(newCar.age());
/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

let users = [
  { name: "Tony", score: 10 },
  { name: "Munny", score: 68 },
  { name: "Krrish", score: 87 },
  { name: "Ablaziz", score: 89 },
];
console.log(users);
let sortArray = document.getElementById("sort-Array");
sortArray.addEventListener("click", sortfunction);
function sortfunction() {
  users.sort((a, b) => {
    return b.score - a.score;
  });
}
// console.log(users);
/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/
let inputObject = document.getElementById("ObjectInput");
let itesmBtn = document.getElementById("object-submit");
let shoppingList = {
  items: [],
};
function displayUpdatedList() {
  let input = inputObject.value;
  shoppingList.items.push(input);
}
itesmBtn.addEventListener("click", displayUpdatedList);
// console.log(shoppingList.items);

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/
// function post(title, content, likes) {
//   (this.title = title), (this.content = content), (this.likes = likes);
// }

// let posts = [];

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

function employee(name, position, salary) {
  (this.name = name),
    (this.position = position),
    (this.salary = salary),
    (this.increaseSalary = function (percent) {
      this.salary += (percent / 100) * this.salary;
    });
}
let newEmp = new employee("Ablaziz", "junior", 3000);
newEmp.increaseSalary(10);
console.log(newEmp);

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

let timer = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++;
      document.getElementById("time-here").innerText = this.seconds;
    }, 1000);
  },
};
let timeCont = document.getElementById("time-here");
timer.start();

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

let bookarray = [];
function Book(title, author, pages) {
  (this.title = title), (this.author = author), (this.pages = pages);
}
function store() {
  let bookInstance = new Book(
    document.getElementById("title-Book").value,
    document.getElementById("author-Book").value,
    document.getElementById("pages-Book").value
  );
  bookarray.push(bookInstance);
}
let submitBtn = document.getElementById("submit-Book-Form");
submitBtn.addEventListener("click", store);
/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

let foxes = [];
function foxTracker(name, location) {
  (this.name = name), (this.location = location);
}

let foxName = document.getElementById("foxName");
let foxLocation = document.getElementById("foxLocation");
let SubmitFox = document.getElementById("SubmitFox");
function addtoarray() {
  let foxinstance = new foxTracker(foxName.value, foxLocation.value);
  foxes.push(foxinstance);
}
SubmitFox.addEventListener("click", addtoarray);
