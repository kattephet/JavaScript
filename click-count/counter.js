const button = document.querySelector("button.resetCounter");
const clickArea = document.querySelector("html:not(.resetCounter)");
const counter = document.querySelector("#main-heading");
const scores = document.querySelector(".scores");
const motivator = document.querySelector(".motivator");
let clicks = 1;
let listPosition = 1;

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
    motivator.style.fontSize = "70px";
    motivator.style.color = "red";
  } else if (clicks < 100) {
    motivator.textContent = "Keep going, don't stop!";
  } else {
    motivator.textContent = "UNBELIEVALBE!!!!";
    motivator.style.fontSize = "100px";
  }
}

clickArea.addEventListener("click", () => {
  counter.textContent = `Click nr: ${clicks}`;
  clicks += 1;
  motivatorTitle(clicks);
});

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = `${listPosition}: ${clicks - 1} clicks - ${comment(clicks)}`;
  scores.appendChild(li);
  clicks = 0;
  listPosition += 1;
});
