const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");

const toggleList = document.querySelector("#toggleList");
const list = document.querySelector(".list");
const ulList = list.querySelector("ul");

const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

const firstListElement = document.querySelector(".up");
const lis = ulList.children;
const firstPosition = ulList.firstElementChild;
const lastPosition = ulList.lastElementChild;

function attachListItemButtons(li) {
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "Up";
  li.appendChild(up);

  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "Down";
  li.appendChild(down);

  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

function firstLastRemove() {
  let first = ulList.firstElementChild;
  let last = ulList.lastElementChild;
  let up = first.querySelector(".up");
  let down = last.querySelector(".down");
  if (up) {
    first.removeChild(up);
  }
  if (down) {
    last.removeChild(down);
  }
}


function firstLastBGColor() {
  let first = ulList.firstElementChild;
  let last = ulList.lastElementChild;
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].style.background = "white";
    first.style.background = "lightblue";
    last.style.background = "lightpink";
    ulList.firstElementChild.firstElementChild.style.background = "#508abc";
  }
}


function removeButtons(element) {
  var child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function removeAndAttach(func1, func2) {
  if (ulList.childElementCount > 1) {
    for (i = 2; i < 6; i++) {
      func1(arguments[i]);
      func2(arguments[i]);
    }
  }
}


// Removing all buttons (old version)
// function resetAllButtons(li) {
//   for (let i = 0; i < li.length; i += 1) {
//     let list = li[i];
//     var child = list.lastElementChild;
//     while (child) {
//       list.removeChild(child);
//       child = list.lastElementChild;
//     }
//   }
// }

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

firstLastRemove();
firstLastBGColor();

list.addEventListener("click", (event) => {
  let first = ulList.firstElementChild;
  let second = ulList.firstElementChild.nextElementSibling;
  let penultimate = ulList.lastElementChild.previousElementSibling;
  let last = ulList.lastElementChild;
  removeAndAttach(
    removeButtons,
    attachListItemButtons,
    first,
    second,
    penultimate,
    last
  );
  firstLastRemove();
  firstLastBGColor();
});

ulList.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == "up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == "down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

descriptionButton.addEventListener("click", () => {
  descriptionP.innerHTML = `<h2>${descriptionInput.value}:</h2>`;
  descriptionInput.value = "";
});

toggleList.addEventListener("click", () => {
  if (list.style.display == "none") {
    list.style.display = "block";
    toggleList.textContent = "Hide List";
  } else {
    list.style.display = "none";
    toggleList.textContent = "Show List";
  }
});

addItemButton.addEventListener("click", () => {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
});
