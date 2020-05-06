let students = [
  {name: 'greg',
   track: 'Web design, CSS',
   achievments: 763,
   points: 122
  },
    {name: 'adam',
   track: 'Web design',
   achievments: 163,
   points: 422
  },
    {name: 'tom',
   track: 'CSS',
   achievments: 653,
   points: 152
  },
    {name: 'martin',
   track: 'Web design, JS',
   achievments: 713,
   points: 162
  },
    {name: 'ben',
   track: 'JS, CSS',
   achievments: 773,
   points: 1127
  },
    {name: 'josh',
   track: 'JS, CSS',
   achievments: 773,
   points: 1127
  },
   {name: 'rad',
  track: 'JS, CSS',
  achievments: 773,
  points: 1127
}
];

let message = ('Type in a name of student you are looking for.');
message +=(' If you wish to see all the names of our stundents type"list".');
message +=(' If you wish to quit our program type "quit".');
let html;
let search;

// functions

function print(message) {
 var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

function list(number) {
  let position =`<li style="font-size:22px">${capitalizeFirstLetter(students[number].name)}</li>`;
  return position;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// loops

while(true) {

  search = prompt(message);
  search = search.toLowerCase();
  html = "<ol>";

  if ( search === "quit") {
    print('<h1>End</h2>.');
    break;
  }

  for ( let i=0; i<students.length; i+=1) {

    if ( search === "list") {
      html += `${list(i)}`;
    }
    print(html);
 }

}
