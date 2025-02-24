const colors = ["Green", "Reg", "Blue"];

//way 1
// colors.forEach((color) => console.log(color));

//way2
// for (let color of colors) {
//   console.log(color);
// }

//way3
const doubled = colors.map((num) => num + 2);
// console.log(doubled);

const ages = [12, 18, 25, 30, 22];
// const mapAdults = ages.map((age) => age >= 18);
// const filterAdults = ages.filter((age) => age >= 18);
// console.log(mapAdults);
// console.log(filterAdults);
const firstAdult = ages.find((age) => age > 20);
// console.log(firstAdult);

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// let combined = arr1.concat(arr2);
// let combined = [...arr1, ...arr2];
// console.log(combined);

const scores = [85, 90, 78, 92];
console.log(scores.some((score) => score < 80));
console.log(scores.every((score) => score > 70));
