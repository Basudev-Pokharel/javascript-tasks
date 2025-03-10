/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ["John", "Emily", "Mike", "Sarah"];
// 1. Loop through the `teamMembers` array and log each name to the console.
for (let i of teamMembers) {
  console.log(i);
}
// 2. Remove the first member of the array.
teamMembers.shift();
// 3. Remove the last member of the array.
teamMembers.pop();
// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
let newArray = teamMembers;
console.log(newArray);
console.log(teamMembers);

// 7. Find the index of "Mike" in the array.
console.log(teamMembers.indexOf("Mike"));
// 8. Try to find the index of "Jake" (who is not in the array).
console.log(teamMembers.indexOf("Jake"));

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
teamMembers.splice(2, 1, "Carol", "Bruce");
console.log(teamMembers);
// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
let newArray2 = teamMembers.concat("Bob");
console.log(newArray2);

// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
let tempArray = teamMembers.slice();
console.log(tempArray);

// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
let newMembers = ["Tina", "Dean"];
let mergedArray = teamMembers.concat(newMembers);
console.log(mergedArray);

// 13. Find all occurrences of "John" in the array and store their positions in a new array.
let occurences = [];
for (let i in teamMembers) {
  if (teamMembers[i] == "John") {
    occurences.push(i);
  }
}
// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
let TransformArray = teamMembers.map((char) => char.toUpperCase());
console.log(TransformArray);
// 15. Sort `teamMembers` in alphabetical order.
teamMembers.sort();
// 16. Reverse the `teamMembers` array.
teamMembers.reverse();
// 17. Check if at least one member in the array is named "John".
teamMembers.includes("john");
// 18. Check if all names in the array have more than three letters.
let decision = teamMembers.every((char) => char.length > 3);
console.log(decision);
