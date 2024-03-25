function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const sommeNombresPremiers = (nb1, nb2) => {
  if (isPrime(nb1) && isPrime(nb2)) return nb1 + nb2;
  else return false;
};
