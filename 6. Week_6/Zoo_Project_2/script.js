let inputAnimal = document.getElementById("newAnimalName");
let addAnimalBtn = document.getElementById("addAnimal");
let animalContainer = document.getElementById("animalList");

let animalList = [
  { name: "Dog", type: "Mammal" },
  { name: "Cow", type: "Mammal" },
  { name: "Tuna", type: "Fish" },
  { name: "Crow", type: "Bird" },
  { name: "Frog", type: "Amphibian" },
];

//Add animal
addAnimalBtn.addEventListener("click", addAnimal);

function addAnimal() {
  let name = inputAnimal.value;
  displayAnimal(name);
  inputAnimal.value = "";
  console.log(name);
}
//Display animal only function
function displayAnimal(name) {
  let li = document.createElement("li");
  li.innerText = name;
  animalContainer.appendChild(li);
}

addAnimal();

//Search Animal here
let searchText = document.getElementById("searchAnimal");
searchText.addEventListener("input", showSearchAnimal);
function showSearchAnimal() {}
