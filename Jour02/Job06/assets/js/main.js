const body = document.querySelector("body");

let konami = [];
let reponse = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "B",
  "A",
];
let count = 0;

const checkKonami = () => {
  return reponse.map((value, index) => value == konami[index]);
};

document.addEventListener("keydown", (event) => {
  if (count === 10 && checkKonami) {
    body.style.backgroundColor = "#020E64";
  } else {
    konami.push(event.key);
    count++;
  }
});
