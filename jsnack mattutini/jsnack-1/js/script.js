// Es.1 Genera N array random - 9 Luglio 2020 JS

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

// Dichiarazione variabili

var numero = parseInt(prompt("Inserisci un numero intero:"));
var array = [];
var dbArray = [];

for (var i = 0; i < numero; i++) {
  for (var j = 0; j < 10; j++) {
    array.push(getRandom(1, 100));
  }
  dbArray.push(array);
  array = []; // Reset dell'array
}

console.log(dbArray);

// Definizione funzioni

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
