const tri = (numbers, order) => {
  if (order === "asc") {
    return numbers.sort((a, b) => a - b);
  }
  if (order === "desc") {
    return numbers.sort((a, b) => b - a);
  }
};

console.log(tri([10, 1, 3, 6], "desc"));
