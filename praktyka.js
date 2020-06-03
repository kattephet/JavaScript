let students = [
  { name: "Greg", track: "Web design, CSS", achievments: 763, points: 122 },
  { name: "Adam", track: "Web design", achievments: 163, points: 422 },
  { name: "Tom", track: "CSS", achievments: 653, points: 152 },
  { name: "Martin", track: "Web design, JS", achievments: 713, points: 162 },
  { name: "Ben", track: "JS, CSS", achievments: 773, points: 1127 },
  { name: "Josh", track: "JS, CSS", achievments: 773, points: 1127 },
  { name: "Tad", track: "JS, CSS", achievments: 773, points: 1127 },
  { name: "Greg", track: "JS, CSS", achievments: 1254, points: 1112 },
  { name: "Anna", track: "JS, CSS", achievments: 1254, points: 1112 },
  { name: "Tim", track: "JS, CSS", achievments: 1254, points: 1112 },
];

let message = "Type in a name of student you are looking for.";
message += ' If you wish to see all the names of our stundents type"list".';
message += ' If you wish to quit our program type "quit".';
let html;
let search;
let fulList;

// functions

function list(name, callback) {
  let position = `<li style="font-size:22px">${callback(name)}</li>`;
  return position;
}

function printInformation(name, track, achievments, points) {
  let print = `<h2>Student: ${name}</h2>`;
  print += `<p>Track: ${track}</p>`;
  print += `<p>Achievments: ${achievments}</p>`;
  print += `<p>Points: ${points}</p>`;
  return print;
}

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

while (true) {
  search = prompt(message);
  search = search.toLowerCase();
  fulList = "<h2>List</h2><ol>";
  html = " ";

  if (search === "quit" || search === "null") {
    print("<h1>End</h2>.");
    break;
  }

  students.forEach((item) => {
    if (search === "list") {
      fulList += `${list(item.name, capitalizeFirstLetter)}`;
      html = fulList;
    } else if (search === item.name.toLowerCase()) {
      html += `${printInformation(
        item.name,
        item.track,
        item.achievments,
        item.points
      )}`;
    }
  });

  if (html === " ") {
    html = `<h2>Student ${capitalizeFirstLetter(
      search
    )} is not in our base, sorry. Try again.</h2>`;
  }

  print(html);
}

// Old version

// function printInformation(number) {
//   let print = `<h2>Student: ${students[number].name}</h2>`;
//   print += `<p>Track: ${students[number].track}</p>`;
//   print += `<p>Achievments: ${students[number].achievments}</p>`;
//   print += `<p>Points: ${students[number].points}</p>`;
//   return print;
// }

// function list(number) {
//   let position = `<li style="font-size:22px">${capitalizeFirstLetter(
//     students[number].name
//   )}</li>`;
//   return position;
// }

// for (let i = 0; i < students.length; i += 1) {
//   if (search === "list") {
//     fulList += `${list(i)}`;
//     html = fulList;
//   } else if (search === students[i].name.toLowerCase()) {
//     html += `${printInformation(i)}`;
//   }
// }
