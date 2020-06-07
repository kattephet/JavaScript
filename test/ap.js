function getRandomIntInclusive(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

console.log(getRandomIntInclusive(1, 10));
