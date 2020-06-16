function halvingSum(n) {
 let divide = 2;
 let result = n;
  while(true) {
    let add = Math.floor(n / divide);
    result += add;
    divide *= 2;
    if (add === 0) {
     return result;
     break;
    }
  }
}
