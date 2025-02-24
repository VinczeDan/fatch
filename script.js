async function randomColorFetch() {
  let response = await fetch("https://x-colors.yurace.pro/api/random");
  let data = await response.json();
  return data.hex;
}

async function szinek_ujra() {
  let color1 = await randomColorFetch();
  let color2 = await randomColorFetch();
  let color3 = await randomColorFetch();

  document.querySelector(".szinezendo_doboz1").style.backgroundColor = color1;
  document.querySelector(".szinezendo_doboz2").style.backgroundColor = color2;
  document.querySelector(".szinezendo_doboz3").style.backgroundColor = color3;

  melyikalegpirosabb([color1, color2, color3]);

  document.getElementById("resultMessage").textContent = "";
}

let highestRedIndex = 0;

function melyikalegpirosabb(colors) {
  let max = 0;
  highestRedIndex = 0;  // Itt frissítjük a globális változót

  colors.forEach((color, index) => {
      let r = parseInt(color.substring(1, 3), 16); 
      if (r > max) {
          max = r;
          highestRedIndex = index;  // Itt állítjuk be a legpirosabb indexét
      }
  });
}

function ellenorzes() {
  let boxes = document.querySelectorAll(".div-container div");

  boxes.forEach((box, index) => {
      box.addEventListener("click", function () {
          if (index === highestRedIndex) {
              document.getElementById("resultMessage").textContent = "Helyes! Eltaláltad!";
          } else {
              document.getElementById("resultMessage").textContent = "Helytelen! Próbáld meg újra!";
          }
      });
  });
}

function main() {
  document.getElementById("changeColor").addEventListener("click", () => {
      szinek_ujra();
      document.getElementById("resultMessage").textContent = ""; 
  });

  ellenorzes(); 
  szinek_ujra(); 
}

main();
