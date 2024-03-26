const body = document.querySelector("body");

let konami = [];
let reponse = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let count = 0;

const checkKonami = () => {
  return reponse.toString() === konami.toString();
};

document.addEventListener("keydown", (event) => {
  konami.push(event.key);

  if (konami.length === reponse.length) {
    console.log(konami.toString(), reponse.toString());
    if (checkKonami()) {
      console.log("Konami Code réussi", count);
      body.style.backgroundColor = "#020E64";
    } else {
      console.log("Konami Code échoué", count);
    }
    konami = [];
    count = -1;
  }

  count++;
  console.log("Compteur: ", count);
});
