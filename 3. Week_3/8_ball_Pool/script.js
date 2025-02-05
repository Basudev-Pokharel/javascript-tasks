let userInput = prompt("Enter your choice: ");
console.log(userInput);

let randomNum = Math.floor(Math.random() * (8 - 1 + 1) + 1);
const magic8Ball = (randomNum) => {
  switch (randomNum) {
    case 1:
      return "Yes, absolutely! Go for it!";
    case 2:
      return "Hmm, ask again after a cup of coffee!";
    case 3:
      return "Nope, not in a million years!";
    case 4:
      return "Maybe... if pigs start flying.";
    case 5:
      return "Yes, but only on Tuesdays.";
    case 6:
      return "Don’t count on it, buddy!";
    case 7:
      return "Sure, why not? Live a little!";
    case 8:
      return "The 8-ball says... try again later!";
    default:
      return "Invalid input, Enter between 1 and 8!";
  }
};
alert(`Answer to your question : ${magic8Ball(randomNum)}`);
