const button = document.querySelector('button.resetCounter');
const clickArea = document.querySelector('html:not(.resetCounter)');
const counter = document.querySelector('#main-heading');
const scores = document.querySelector('.scores');
let clicks = 0;
let listPosition = 1;

clickArea.addEventListener('click', () => {
  counter.textContent = `Click nr: ${clicks}`;
  clicks += 1;
});

button.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = `${listPosition}: ${clicks - 1}`;
  scores.appendChild(li);
  clicks = 0;
  listPosition += 1;
})
