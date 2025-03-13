/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

let message = "Hello, LocalStorage!";
localStorage.setItem("message", message);
console.log(localStorage.getItem("message"));

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

let userSetting = {
  theme: "dark",
  language: "English",
};

let jsonStringg = JSON.stringify(userSetting);
localStorage.setItem("msg", jsonStringg);
let jsretrieve = localStorage.getItem("msg");
console.log(JSON.parse(jsretrieve).theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

let favoriteBooks = [
  { title: "Abdul", author: "Abdul" },
  { title: "How to code", author: "Basu" },
  { title: "How to fun", author: "xingong" },
];
favoriteBooks = JSON.stringify(favoriteBooks);
localStorage.setItem("store", favoriteBooks);
let retrievee = localStorage.getItem("store");
JSON.parse(retrievee).forEach((title) => {
  console.log(title.title);
});
/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

function saveToLocalSTorage(key, objectt) {
  let object = JSON.stringify(objectt);
  let local = localStorage.setItem(key, object);
}
saveToLocalSTorage("just", favoriteBooks);
console.log(localStorage.getItem("just"));

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/
let json = JSON.stringify(favoriteBooks);
function getFromLocalStorage(key) {
  let value = localStorage.getItem(key);
  if (typeof value == "string") {
    console.log(JSON.parse(value));
  } else {
    console.log(value);
  }
}

getFromLocalStorage(json);

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

let userProfile = {
  username: "Tony",
  email: "tony123@email.com",
  preferences: { theme: "Dark", notifications: "off" },
};
localStorage.setItem("profile", JSON.stringify(userProfile));
let retrieved = JSON.parse(localStorage.getItem("profile"));
retrieved.preferences.theme = "Dark mode";
console.log(retrieved);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

let shoppingList = {
  items: ["Bag", "Copy", "laptop"],
};
localStorage.setItem("shopping", JSON.stringify(shoppingList));
function addItemtoList(item) {
  let retrievedValue = JSON.parse(localStorage.getItem("shopping"));
  retrievedValue.items.push("Car");
  localStorage.setItem("shopping", JSON.stringify(retrievedValue));
  console.log(retrievedValue);
}
addItemtoList(shoppingList);

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

let counter = {
  count: 0,
};
localStorage.setItem("count", JSON.stringify(counter));
function incrementCounter() {
  let retroevedVal = JSON.parse(localStorage.getItem("count"));
  retroevedVal.count++;
  localStorage.setItem("count", JSON.stringify(retroevedVal));
  console.log(retroevedVal);
}
incrementCounter();
/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

let tasks = [
  { id: 123, description: "food", completed: "completed" },
  { id: 234, description: "study", completed: "yes" },
  { id: 566, description: "cycling", completed: "no" },
];
localStorage.setItem("takkkks", JSON.stringify(tasks));
function markTaskComplete(taskId) {
  let retrieve = JSON.parse(localStorage.getItem("takkkks"));
  retrieve.forEach((char) => {
    if (char.id == taskId) {
      char.completed = true;
    }
  });
  console.log(retrieve);
  localStorage.setItem("takkkks", JSON.stringify(retrieve));
}
markTaskComplete(123);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

function clearLocalStorage() {
  localStorage.clear();
}
// clearLocalStorage();
