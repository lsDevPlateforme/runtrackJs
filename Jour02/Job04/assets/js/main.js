const keyogger = document.querySelector("#keyogger");

const letterAuthorize = "abcdefghijklmnopqrstuvwxyz";

document.addEventListener("keydown", (event) => {
  if (
    !document.activeElement === keyogger &&
    letterAuthorize.includes(event.key)
  ) {
    keyogger.innerHTML = keyogger.textContent + event.key;
  }
});

function addCharTwice(event) {
  if (letterAuthorize.includes(event.key)) {
    event.preventDefault();
    keyogger.value += event.key + event.key;
  }
}

keyogger.addEventListener("focus", () => {
  keyogger.addEventListener("keydown", addCharTwice);
});

keyogger.addEventListener("blur", () => {
  keyogger.removeEventListener("keydown", addCharTwice);
});
