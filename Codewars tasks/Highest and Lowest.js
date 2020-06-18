function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let highest = arr[0];
  let lowest = arr[0];
  for (i = 1; i < arr.length; i++) {
    x = parseInt(arr[i]);
    x < lowest ? (lowest = x) : false;
    x > highest ? (highest = x) : false;
  }
  return `${highest} ${lowest}`;
}

// Older version with simple if else statement

// function highAndLow(numbers) {
//   let arr = numbers.split(" ");
//   let highest = arr[0];
//   let lowest = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     x = parseInt(arr[i]);
//     if (x < lowest) {
//       lowest = x;
//     } else if (x > highest) {
//       highest = x;
//     }
//   }
//   return `${highest} ${lowest}`;
// }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
