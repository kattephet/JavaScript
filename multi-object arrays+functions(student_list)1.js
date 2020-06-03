let students = [
  { name: "Greg", track: "Web design, CSS", achievments: 763, points: 122 },
  { name: "Adam", track: "Web design", achievments: 163, points: 422 },
  { name: "Tom", track: "CSS", achievments: 653, points: 152 },
  { name: "Martin", track: "Web design, JS", achievments: 713, points: 162 },
  { name: "Ben", track: "JS, CSS", achievments: 773, points: 1127 },
];

let html = "";

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

students.forEach((item) => {
  let output = `<h2>Student: ${item.name}</h2>`;
  output += `<p>Track: ${item.track}</p>`;
  output += `<p>Achievments: ${item.achievments}</p>`;
  output += `<p>Points: ${item.points}</p>`;
  html += output;
});

print(html);

// Old version

// let students = [
//   { name: "Greg", track: "Web design, CSS", achievments: 763, points: 122 },
//   { name: "Adam", track: "Web design", achievments: 163, points: 422 },
//   { name: "Tom", track: "CSS", achievments: 653, points: 152 },
//   { name: "Martin", track: "Web design, JS", achievments: 713, points: 162 },
//   { name: "Ben", track: "JS, CSS", achievments: 773, points: 1127 },
// ];
//
// let html = "";
//
// function print(message) {
//   var outputDiv = document.getElementById("output");
//   outputDiv.innerHTML = message;
// }
//
// function printInformation(number) {
//   let print = `<h2>Student: ${students[number].name}</h2>`;
//   print += `<p>Track: ${students[number].track}</p>`;
//   print += `<p>Achievments: ${students[number].achievments}</p>`;
//   print += `<p>Points: ${students[number].points}</p>`;
//   return print;
// }
//
// for (var i = 0; i < students.length; i += 1) {
//   html += `${printInformation(i)}`;
// }
//
// print(html);
