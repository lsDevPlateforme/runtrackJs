const button = document.querySelector("#button");
const compteur = document.querySelector("#compteur");

let count = 0;
const addOne = () => {
  count++;
  compteur.innerHTML = count;
};

button.addEventListener("click", addOne);
