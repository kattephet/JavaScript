let continents = [
  "Asia",
  "South America",
  "North America",
  "Africa",
  "Europe",
  "Antarctica",
  "Australia",
];

let html = continents.filter(countryName => {
  if (countryName.charAt(0) === "A") {
    return countryName;
  }
});

console.log(html);

// function aFilter (countryName) {
//   if (countryName.charAt(0) === "A") {
//     return countryName;
//   }
// };
//
// let html = continents.filter(aFilter);
// console.log(html);

//Old version

// let html = "";
//
// for (i = 0; i < continents.length; i += 1) {
//   // Loop goes through all the index objects
//
//   if (continents[i].charAt(0) === "A")
//     // Checks if there is a name with "A" as a first letter, "chartAt(indexValue)" is a  method which checks for you if there is a certain letter standing in a word at specified index position, in this cause "0" cause you want to check first letter.
//
//     html += continents[i]; // Adds all the index values with "A" as a first letter to 'html'
// }
//
// console.log(html); // prints all html to console
