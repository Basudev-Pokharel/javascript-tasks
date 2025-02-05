//Question no 1
// let age = 20;
// const checkAdult = (age) => {
//   return age >= 18 ? "You are an adult" : "not adult";
//   //   if (age > -18) {
//   //     return "you are an adult";
//   //   }
// };
// console.log(checkAdult(19));
// console.log(checkAdult(17));

//Question no 2
// function checkForFox(bool) {
//   return bool ? "You have a fox as a pet" : "No fox detected!";
// }
// console.log(checkForFox(true));

//Question no 3
// function getGrade(score) {
//   if (score >= 90) {
//     return "Grade A";
//   } else if (score >= 80 && score <= 89) {
//     return "Grade B";
//   } else {
//     return "Grade C";
//   }
//   switch (score) {
//     case score >= 90:
//       return "Grade A";
//       break;

//     case score >= 80 && score <= 89:
//       return "Grade B";

//     default:
//       return "Grade C";
//   }
// }
// console.log(getGrade(60));
// console.log(getGrade(96));
// console.log(getGrade(89));
// console.log(getGrade(86));

//Question no 4
// const canEat = (isHungry, hasFood = true) => {
//   if (isHungry && hasFood) {
//     return "Time to eat!";
//   } else {
//     return "You need to find food!";
//   }
//   switch (isHungry && hasFood) {
//     case true:
//       return "Time to eat!";
//     default:
//       return "You need to find food!";
//   }
// };
// console.log(canEat(true, true));

//Question no 5
// const checkAnimal = (animalType) =>
//   animalType == "fox"
//     ? "You have a clever companion!"
//     : "Nox a fox, but still cool!";

// console.log(checkAnimal("fox"));

//Question no 6
// const isEven = (num) => (num % 2 == 0 ? true : false);
// isEven(4)
//   ? console.log("The number is even!")
//   : console.log("The number is odd!");
// isEven(7)
//   ? console.log("The number is even!")
//   : console.log("The number is odd!");

//Question no 7
// const getAnimalDescription = (favouriteAnimal) => {
//   switch (favouriteAnimal) {
//     case "fox":
//       return "Foxes are sly and smart!";
//     case "dog":
//       return "Dogs are loyal friends.";
//     case "cat":
//       return "Cats are curious and independent.";
//     default:
//       return "All animals are awesome!";
//   }
// };
// console.log(getAnimalDescription("cat"));
// console.log(getAnimalDescription("tiger"));
// console.log(getAnimalDescription("rapid"));

//Question no 8
// const canVote = (age) => {
//   return age > 18 ? true : false;
// };
// canVote(19);
// if (canVote(19)) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible to vote");
// }

//Question no 9
const canEnterEvent = (age, hadID) => {
  return age >= 18 && hadID ? "You can enter the event." : "You cannot enter.";
};
console.log(canEnterEvent(19, true));
console.log(canEnterEvent(20, false));

//Question no 10
const findFox = (hasFox, foxName) => {
  if (hasFox && foxName == "Fiona") {
    return "Fiona the fox is here!";
  } else {
    return "No foxes found";
  }
};
console.log(findFox(true, "Fiona"));
console.log(findFox(false, "Fiona"));

//Question no 11
const getDayName = (day) => {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
};
console.log(getDayName(5));

//Question no 12
const checkFoxLover = (age, likesFoxes) => {
  if (age >= 18 || likesFoxes) {
    return "You are an adult who likes foxes!";
  } else {
    return "Nox a fox fan, but that's okay";
  }
};
console.log(checkFoxLover(19, true));

//Question no 13

function planAdventure(isWeekend, isSunny, likesFoxes) {
  if (isWeekend == "weekend" && isSunny == "sunny" && likesFoxes == "foxes") {
    return "Perfect day for a fox adventure!";
  } else if (isWeekend == "weekend" || isSunny == "sunny") {
    return "Good day, but not perfect.";
  } else {
    return "Maybe another day.";
  }
}

//question no 14
function rainAdvice(isRaining) {
  return isRaining ? "Stay indoors" : "Enjoy the outdoors!";
}
console.log(rainAdvice(true));
console.log(rainAdvice(false));
