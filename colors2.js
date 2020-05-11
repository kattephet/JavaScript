let colors = [];
let list = "<ul>";

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function listPoistion(number) {
  let position = `<li>${colors[number]}</li>`;
  return position;
}

while (true) {
  let quiestionColor = prompt(
    "Type in some color name. If you want to end type 'quit'"
  );

  if (quiestionColor === "quit") {
    break;
  }

  let pushColor = colors.push(quiestionColor);
}

for (i = 0; i < colors.length; i += 1) {
  list += listPoistion(i);
}

print(list);

for (i = 0; i < colors.length; i += 1) {
  let listItem = document.querySelectorAll("li");
  listItem[i].style.backgroundColor = colors[i];
}
