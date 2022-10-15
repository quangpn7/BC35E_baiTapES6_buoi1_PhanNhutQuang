let colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermil",
  "lion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let changeColor = (color) => {
  document.querySelector("#house").classList = "house";
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#house").classList.add(`${color}`);
  document.querySelector(`button.${color}`).classList.add("active");
};
let renderBtn = (colorArr) => {
  let contentHTML = `<button class="color-button ${colorArr[0]} active" onclick = "changeColor('${colorArr[0]}')"></button>`;
  colorArr.splice(0, 1);
  for (let color of colorArr) {
    contentHTML += `
    <button class="color-button ${color}" onclick = "changeColor('${color}')"></button>
    `;
  }
  document.querySelector("#colorContainer").innerHTML = contentHTML;
};
renderBtn(colorList);
