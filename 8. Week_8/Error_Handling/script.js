"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
  try {
    hello();
    if (hello()) {
      console.log("Good");
    }
  } catch (err) {
    console.log("Error caught: Function is not defined");
  }
}
task1();

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
  try {
    console.log(helllo);
  } catch (err) {
    console.log("ReferenceError caught:", err.message);
  }
}
task2();

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
  let helllo = 5;
  try {
    console.log(helllo);
  } catch (err) {
    console.log("ReferenceError caught:", err.message);
  } finally {
    console.log("Task completed");
  }
}
task3();

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
  try {
    console.log(JSON.parse(jsonString));
  } catch {
    console.log("INvalid JSON Format");
  }
}
parseJSON('{"name": "Alice", "age": 25}');
parseJSON("Invalid JSON text");

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18.");
  }
}
try {
  checkAge(20);
  console.log("Access granted.");
} catch (err) {
  console.log("Error:", err.message);
}
try {
  checkAge(16);
} catch (err) {
  console.log("Error:", err.message);
}

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  localStorage.setItem("ovjeect", JSON.stringify(user));
}

function getUser() {
  let localVar = localStorage.getItem("ovjeect");
  if (localVar) {
    return JSON.parse(localVar);
  } else {
    return null;
  }
}
saveUser("{ Invalid Json}");
// saveUser({ name: "Alice", age: 25 });
try {
  console.log(getUser());
} catch (err) {
  console.log(err);
}

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  if (obj[key]) {
    return obj[key];
  } else {
    throw new Error("Property not found");
  }
}

try {
  console.log(checkProperty({ name: "Bob", age: 30 }, "email"));
} catch (err) {
  console.log(err.message);
}

try {
  console.log(checkProperty({ name: "Bob", age: 30 }, "name"));
} catch (err) {
  console.log(err.message);
}
// console.log(checkProperty({ name: "Bob", age: 30 }, "email"));

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

// async function fetchData(url) {
//   return await fetch("https://jsonplaceholder.typicode.com/users");
// }
// try {
//   console.log(fetchData("https://jsonplaceholder.typicode.com/users"));
// } catch (err) {
//   console.log("Network error");
// }
// try {
//   console.log(fetchData("invalid-url"));
// } catch (err) {
//   console.log("Network error");
// }

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

// function task9(malformedURI) {
//   return malformedURI;
// }
// try

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

// function clearStorage() {
//   localStorage.clear();
// }
// try {
//   clearStorage();
//   console.log("LocalStorage cleared.");
// } catch {
//   console.log("Cannot cleared local storage.");
// }
