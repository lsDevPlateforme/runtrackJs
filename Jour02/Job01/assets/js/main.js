const button = document.querySelector("#button");

const citation = () => {
  const article = document.querySelector("#citation");
  console.log(article.textContent);
};

button.addEventListener("click", citation);
