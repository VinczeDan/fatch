async function randomColorFetch() {
  let response = await fetch("https://x-colors.yurace.pro/api/random");
  let data = await response.json();
  return data.hex;
}

async function changeSquareColor() {
  let color = await randomColorFetch();
  document.querySelector(".szinezendo_doboz").style.backgroundColor = color;
}

function addEventListeners() {
  document
    .getElementById("changeColor")
    .addEventListener("click", changeSquareColor);
}

function main() {
  addEventListeners();
}

main();
