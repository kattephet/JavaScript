let students = [
  { name: "greg", track: "Web design, CSS", achievments: 763, points: 122 },
  { name: "adam", track: "Web design", achievments: 163, points: 422 },
  { name: "tom", track: "CSS", achievments: 653, points: 152 },
  { name: "martin", track: "Web design, JS", achievments: 713, points: 162 },
  { name: "ben", track: "JS, CSS", achievments: 773, points: 1127 },
  { name: "tom", track: "JS, Python", achievments: 234, points: 53 },
];

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let html = "";
let search;
let result;

while (true) {
  search = prompt(
    'Type in student name you want to look for.(Type in "quit" if you want to End).'
  );
  search = search.toLowerCase();

  if (search === "quit" || search === "null") {
    break;
  }

  students.forEach((item) => {
    let studentName = item.name;
    if (studentName === search) {
      html += `<h2>Student: ${capitalizeFirstLetter(item.name)}</h2>`;
      html += `<p>Track: ${item.track}</p>`;
      html += `<p>Achievments: ${item.achievments}</p>`;
      html += `<p>Points: ${item.points}</p>`;
      print(html);
    } else if (html === "") {
      print(
        `<h2>Student ${capitalizeFirstLetter(
          search
        )} is not in our base, sorry. Try again.</h2>`
      );
    }
  });
  html = "";
}

// Old version
//

// function printInformation(number) {
//   let print = `<h2>Student: ${capitalizeFirstLetter(
//     students[number].name
//   )}</h2>`;
//   print += `<p>Track: ${students[number].track}</p>`;
//   print += `<p>Achievments: ${students[number].achievments}</p>`;
//   print += `<p>Points: ${students[number].points}</p>`;
//   return print;
// }

//   for (var i = 0; i < students.length; i += 1) {
//     let student = students[i].name;
//     if (student === search) {
//       result = i;
//       html += printInformation(i);
//       print(html);
//     } else if (html === "") {
//       print(
//         `<h2>Student ${capitalizeFirstLetter(
//           search
//         )} is not in our base, sorry. Try again.</h2>`
//       );
//     }
//   }
//   html = "";
// }
