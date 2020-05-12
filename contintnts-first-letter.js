let continents = [
  "Asia",
  "South America",
  "North America",
  "Africa",
  "Europe",
  "Antarctica",
  "Australia",
];

let html = '';

for (i = 0; i < continents.length; i += 1) {

  if ( continents[i].charAt(0) === "A")
    html += continents[i] ;
}

console.log(html);
