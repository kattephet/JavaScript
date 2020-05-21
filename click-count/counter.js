const resetButton = document.querySelector("button.resetCounter");
const clickArea = document.querySelector("html:not(.resetCounter)");
const counter = document.querySelector("#main-heading");
const scores = document.querySelector(".scores");
const motivator = document.querySelector(".motivator");
let timeoutID;
let clicks = 1;
let listPosition = 1;
let listElement = scores.children;

let colors = [
  "#C2272D",
  "#ff5900",
  "#F8931F",
  "#FFFF01",
  "#c4f04a",
  "#009245",
  "#0193D9",
  "#017bd9",
  "#0C04ED",
  "#612F90",
];

function comment(clicksAmount) {
  if (clicksAmount < 10) {
    return "poor.";
  } else if (clicksAmount < 40) {
    return "not bad";
  } else if (clicksAmount < 100) {
    return "nice!";
  } else {
    return "WOW!";
  }
}

function motivatorTitle(clicksAmount) {
  if (clicks < 10) {
    motivator.textContent = "Lets go!";
  } else if (clicks < 50) {
    motivator.textContent = "You are doing greate!";
  } else if (clicks < 80) {
    motivator.textContent = "WOW!!!";
    motivator.style.fontSize = "75px";
    motivator.style.color = "red";
  } else if (clicks < 100) {
    motivator.textContent = "Keep going, don't stop!";
  } else {
    motivator.textContent = "UNBELIEVALBE!!!!";
    motivator.style.fontSize = "100px";
  }
}

function addRemoveButton(li) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

function sortPosition(score) {
  while (true) {
    let newScore = parseInt(score.className);
    let compareScore = parseInt(score.previousElementSibling.className);
    if (newScore > compareScore) {
      let up = score;
      let down = score.previousElementSibling;
      scores.insertBefore(up, down);
    } else {
      break;
    }
  }
}

function removeOverTen() {
  let listLength = scores.childElementCount;
  let lastScore = scores.lastElementChild;
  if (listLength > 11) {
    scores.removeChild(lastScore);
  }
}

function backgroundColors() {
  for (let i = 1; i < 11; i += 1) {
    listElement[i].style.backgroundColor = colors[i - 1];
  }
}

clickArea.addEventListener("click", () => {
  window.clearTimeout(timeoutID);
  counter.textContent = `Click nr: ${clicks}`;
  clicks += 1;
  motivatorTitle(clicks);
  // timeoutID = window.setTimeout(window.alert, 3*1000, 'Are you done? COME ON!'); // temporary turned of so it's easier to work on code.
});

resetButton.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = `${listPosition}: ${clicks - 1} clicks - ${comment(clicks)}`;
  li.className = `${clicks - 1}`;
  scores.appendChild(li);
  addRemoveButton(li);
  sortPosition(li);
  removeOverTen();
  clicks = 0;
  motivator.style.color = "black";
  listPosition += 1;
  backgroundColors();
});

scores.addEventListener("click", (event) => {
  if (event.target.className == "remove") {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});
