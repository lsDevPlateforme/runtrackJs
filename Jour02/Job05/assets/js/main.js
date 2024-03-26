const footer = document.querySelector("footer");

const handleScroll = () => {
  console.log(window.scrollY);
  let hue = window.scrollY % 360;
  let color = `hsl(${hue}, 50%, 50%)`;
  footer.style.backgroundColor = color;
};

document.addEventListener("scroll", handleScroll);
