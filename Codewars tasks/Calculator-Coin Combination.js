var coinCombo = function (cents) {
  return go(check, cents, 25, 10, 5, 1);
};

function go(func, cents) {
  let amount = cents;
  let array = [];
  for (let i = 2; i < 6; i++)
    func(amount, arguments[i], (x) => {
      amount -= x * arguments[i];
      array.unshift(x);
    });
  return array;
}

function check(check, min, callback) {
  number = check;z
  x = 0;
  while (true) {
    if (number >= min) {
      x += 1;
      number -= min;
    } else {
      break;
    }
  }
  callback(x);
}

console.log(coinCombo(101), [1, 0, 0, 0]);
