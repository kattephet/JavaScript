function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
