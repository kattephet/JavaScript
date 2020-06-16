function missingValues(arr) {
  let count = 0;
  let x;
  let y;
  for (let i = 0; i < 10000; i++) {
    let position = arr.indexOf(i);
    if (position > -1) {
      i -= 1;
      arr.splice(position, 1);
      count += 1;
    } else if (position < 0 && count === 1) {
      x = i;
      count = 0;
    } else if (position < 0 && count === 2) {
      y = i;
      count = 0;
    } else if (position < 0 && count >= 3) {
      count = 0;
    }
  }
  return x * x * y;
}

console.log(
  missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]),
  28431
);
