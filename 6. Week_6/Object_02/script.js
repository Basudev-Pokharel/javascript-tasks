/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

let weather = {
  temperature: 30,
  humidity: 3,
  condition: "Rainy",
};
function Umbrella(obk) {
  if (obk.condition == "Rainy") {
    return "Take an umbrella!";
  }
}
// console.log(Umbrella(weather));

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

let shoppingCart = [
  {
    name: "Dustbin",
    price: 2,
    quantity: 2,
  },
];
function totalPrice(array) {
  return array.reduce((sum, char) => {
    return (sum += char.quantity * char.price);
  }, 0);
}
console.log(totalPrice(shoppingCart));
/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

let restautants = [
  { name: "ravintola", cuisineType: "Nepali", rating: 4.5 },
  { name: "ravintola", cuisineType: "Indian", rating: 4 },
  { name: "Finnishj Cusisine", cuisineType: "Finnish", rating: 4.9 },
];

function Higherthan4(array) {
  return array.filter((char) => {
    return char.rating > 4;
  });
}
console.log(Higherthan4(restautants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

let bankAccount = {
  accountHolder: "individual",
  balance: 18000,
  transactions: [5, -5, 10, 15],
};
function calculatesTotal(object) {
  return object.transactions.reduce((balance, char) => {
    return (balance += char);
  }, object.balance);
}
console.log(calculatesTotal(bankAccount));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

let students = [
  { name: "Basu", scores: [4, 5, 5, 4.5, 5, 5], averageScore: null },
  { name: "Friend", scores: [4, 4, 4, 4, 4, 4], averageScore: null },
  { name: "Football", scores: [5, 3.9, 3, 3, 4, 4], averageScore: null },
];
function calculateUpdate(students) {
  let total = 0;
  students.forEach((char) => {
    total = char.scores.reduce((total, char) => {
      return (total += char);
    }, 0);
    char.averageScore = total / char.scores.length;
  });
}
calculateUpdate(students);
console.log(students);
/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

let courses = [
  {
    courseName: "Maths",
    instructor: "Basu",
    studentEnrolled: 32,
  },
  {
    courseName: "Biloogy",
    instructor: "Someone",
    studentEnrolled: 19,
  },
];
function MOrethan30(array) {
  return array.filter((char) => {
    if (char.studentEnrolled > 30) {
      return char;
    }
  });
}
console.log(MOrethan30(courses));

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

let pet = {
  species: "Mammal",
  name: "Rat",
  isVaccinated: false,
};
function Vaccinated(obj) {
  if (!obj.isVaccinated) {
    return "Vaccination required";
  }
}
console.log(Vaccinated(pet));

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

let city = {
  name: "Helsinki",
  population: 1800000,
  landmark: "HEL",
};
function BigCity(city) {
  if (city.population > 1000000) {
    return "This is a big city!";
  }
}
console.log(BigCity(city));

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

let transactions = [
  {
    type: "credit",
    amount: 500,
  },
  {
    type: "debit",
    amount: 200,
  },
  {
    type: "credit",
    amount: 333,
  },
  {
    type: "credit",
    amount: 200,
  },
];
function TotalBalance(transactions) {
  return (amount = transactions.reduce((balance, char) => {
    if (char.type == "credit") {
      return (balance += char.amount);
    } else {
      return (balance -= char.amount);
    }
  }, 0));
}
console.log(TotalBalance(transactions));
/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

let foxPack = [
  { name: "Kiara", age: 2, furColor: "white" },
  { name: "Den", age: 5, furColor: "brown" },
  { name: "Husky", age: 3, furColor: "grey" },
];

function yongerFolxes(fax) {
  return fax.filter((char) => {
    return char.age <= 2;
  });
}
console.log(yongerFolxes(foxPack));
/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/
let gameCharacter = {
  name: "Alok",
  level: 3,
  health: 99,
  inventory: ["Sweets", "spices"],
};
function logAllInverntory(spicy) {
  return spicy.inventory.map((char) => {
    return char;
  });
}
console.log(logAllInverntory(gameCharacter));

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/
let employees = [
  {
    name: "Basu",
    role: "Developer",
    workingHours: 42,
  },
  {
    name: "Singla",
    role: "Manager",
    workingHours: 39,
  },
  {
    name: "Teacer",
    role: "Teacher",
    workingHours: 41,
  },
];
function workMore(array) {
  return array.filter((cnhar) => {
    return cnhar.workingHours > 40;
  });
}
console.log(workMore(employees));

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

let musicAlbums = [
  { name: "Romatics", title: "Basu", releaseYear: 2030 },
  { name: "Engjouysa", title: "Narayan", releaseYear: 1970 },
];

function After(array) {
  return array.filter((char) => {
    return char.releaseYear > 2000;
  });
}
console.log(After(musicAlbums));

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

let cars = [
  { brand: "Tesla", model: "model3", hp: 28 },
  { brand: "Audi", model: "model1", hp: 30 },
  { brand: "BMW", model: "modelx", hp: 20 },
  { brand: "Skoda", model: "modelnew", hp: 50 },
  { brand: "Mercedes", model: "qmatic", hp: 99 },
];
console.log(cars);

function highHp(objarray) {
  objarray.sort((a, b) => a.hp - b.hp);
  return objarray[objarray.length - 1];
}
console.log(highHp(cars));

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

let airports = [
  { name: "Finair", countruy: "Finland", flightsPerDay: 400 },
  { name: "Dutch AIr", countruy: "Netherland", flightsPerDay: 800 },
  { name: "Belgium air", countruy: "Belgium", flightsPerDay: 900 },
  { name: "Turkish 1ir", countruy: "Belgium", flightsPerDay: 1200 },
];

function highFlight(airports) {
  airports.sort((a, b) => a.flightsPerDay - b.flightsPerDay);
  return airports[airports.length - 1].name;
}
console.log(highFlight(airports));
