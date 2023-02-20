const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = +input.value;
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

//function getRandomHexColor() {
// return `#${Math.floor(Math.random() * 16777215)
//   .toString(16)
//   .padStart(6, 0)}`;
//}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
