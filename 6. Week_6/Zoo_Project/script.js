//For adding animals in the animals array
let addAnimalBtn = document.querySelector("#addAnimal");
let animals = [];
let animalCopy = [];
let newAnimalName;

function addAnimal() {
  newAnimalName = document.querySelector("#newAnimalName");
  animals.push(newAnimalName.value);
  newAnimalName.value = "";
  //To store array because I have reset it at the end of this function
  animals.forEach((char) => {
    animalCopy.push(char);
    let li = document.createElement("li");
    li.innerText = char;
    animalList.appendChild(li);
  });
  // console.log(animalCopy);
  animals = [];
}

addAnimalBtn.addEventListener("click", addAnimal);

//Dom acceptance of display List
let animalList = document.querySelector("#animalList");

//For sorting array when click on sort and display
let sortAnimals = document.querySelector("#sortAnimals");
let smallChar = []; //array to sort in ascending with to lowercase
function sortAnimalsFunc() {
  animalList.innerHTML = "";
  //   smallChar = animalCopy.map((char) => {
  //     return char.toLowerCase();
  //   });
  //   console.log(smallChar);
  animalCopy.sort();
  animalCopy.forEach((char) => {
    let li = document.createElement("li");
    li.innerText = char;
    animalList.appendChild(li);
  });
}
sortAnimals.addEventListener("click", sortAnimalsFunc);

// Search when input is activate to related alphabets
let searchText = "";
let searchAnimal = document.querySelector("#searchAnimal");
function searchAnimalFunc(evt) {
  searchText = evt.target.value;
  if (searchText.trim() != "") {
    animalCopy.forEach((char) => {
      animalList.innerHTML = "";
      let li = document.createElement("li");
      li.innerText = char;
      animalList.appendChild(li);
    });
  } else {
    storeAfterSearch();
  }
}
function storeAfterSearch() {
  animalCopy.forEach((char) => {
    animalList.innerHTML = "";
    let li = document.createElement("li");
    li.innerText = char;
    animalList.appendChild(li);
  });
}
searchAnimal.addEventListener("input", searchAnimalFunc);
