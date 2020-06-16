function mergeArrays(a, b) {
  let newArray = [];
  while (true) {
    if (a.length > 0) {
      let first = a.shift();
      newArray.push(first);
    }
    if (b.length > 0) {
      let second = b.shift();
      newArray.push(second);
    }
    if (a.length === 0 && b.length === 0) {
      break;
    }
  }
  return newArray;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
