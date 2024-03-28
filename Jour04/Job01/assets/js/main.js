const button = document.querySelector("#button");
const body = document.querySelector("body");

button.addEventListener("click", async () => {
  const result = await fetch("./assets/files/expression.txt");
  const text = await result.text();
  const paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  body.appendChild(paragraph);
});
