async function randomColorFetch() {
  let response = await fetch("https://x-colors.yurace.pro/api/random");
  let data = await response.json();
  return data.hex;
}

async function changeSquareColors() {
  let color1 = await randomColorFetch();
  let color2 = await randomColorFetch();
  let color3 = await randomColorFetch();

  document.querySelector(".szinezendo_doboz1").style.backgroundColor = color1;
  document.querySelector(".szinezendo_doboz2").style.backgroundColor = color2;
  document.querySelector(".szinezendo_doboz3").style.backgroundColor = color3;
}

function main() {
  document
    .getElementById("changeColor")
    .addEventListener("click", changeSquareColors);
}

main();
