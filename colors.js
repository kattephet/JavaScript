let contentRequest = prompt("Type in a title");
let colorRequest = prompt(
  "Type in a name of color you would like to be used as a title bacground"
);

function changeTitle(title) {
  document.getElementById("main-heading").innerHTML = title;
}
function changeColor(color) {
  document.getElementById("main-heading").style.background = color;
}

changeColor(colorRequest);
changeTitle(contentRequest);
