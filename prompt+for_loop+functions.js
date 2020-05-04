let questionAndAnswers = [
  ['What is the capital city in Poland?','warsaw'],
  ['The longes river in Poland?','wisla'],
  ['How many milions people live in Poland?','35']
];

function print(message) {
 var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

function questions(question) {
  let answer = prompt(questionAndAnswers[question][0]);
  return answer.toLowerCase();
}

function createAnswer(type) {
    if ( type.length > 0 ) {
    let print =`<ol><li>`;
    print += type.join('</li><li>');
    print += `</li></ol>`;
    return print;
 } else {
    return `None`;
 }
}

let html = '';
let counter = 0;
let goodAnswers = [];
let badAnswers = [];

for ( var i = 0; i < questionAndAnswers.length; i += 1) {

  let answer = questions(i);
  let position = questionAndAnswers[i].indexOf(answer);

  if ( position === 1 ) {
    goodAnswers.push(questionAndAnswers[i][0]);
  } else if ( position === -1) {
    badAnswers.push(questionAndAnswers[i][0]);
  }

  if ( position === 1 ) {
    counter += 1;
  }
}

html = `You got ${counter} question(s) right.
<h2>You got these questions correct:</h2>${createAnswer(goodAnswers)}
<h2>You got these questions wrong:</h2>${createAnswer(badAnswers)}`;
print(html);
