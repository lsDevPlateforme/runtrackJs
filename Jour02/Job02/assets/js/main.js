const button = document.querySelector("#button");
const article = document.querySelector("article");
const body = document.querySelector("body");

const showhide = () => {
  if (article) {
    article.remove();
  } else {
    let newArticle = document.createElement("article");
    newArticle.innerText =
      "L'important n'est pas la chute, mais l'atterrissage.";
    body.insertBefore(newArticle, button);
  }
};

button.addEventListener("click", showhide);
