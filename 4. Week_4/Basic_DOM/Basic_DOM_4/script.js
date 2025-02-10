let btn = document.querySelector("#btn");
let paragraph = document.querySelector("#para");
// let toogleFunction = () => {
//   paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aperiam
//       voluptatibus quibusdam alias autem provident ipsum. Nobis, perferendis.
//       Neque voluptates aut reiciendis sint repellat velit incidunt nemo illum
//       distinctio, facere hic iste cumque, corrupti doloribus error rerum
//       cupiditate tenetur molestias dicta culpa a vel! Tempore distinctio
//       praesentium quae sint optio qui eaque, sequi error dolores?`;
// };
// btn.addEventListener("click", toogleFunction);

btn.addEventListener("click", () => {
  paragraph.classList.toggle("hidden");
});
