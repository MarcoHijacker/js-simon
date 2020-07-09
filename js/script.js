// Esercizio Simon Says JS

// Un alert espone 5 numeri casuali (univoci). Nota: ogni numero da 1 a 100.
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// Dichiarazione variabili

var numeriEstratti = []; // Var contenente i 5 numeri vincenti, ognuno nel range 1-100
var numeroRandom = 0; // Singolo numero estratto

for (var i = 0; i < 5; i++) {
  numeroRandom = getRandom(1,100);
  if(isAbsent(numeriEstratti, numeroRandom)) { // Uso funzione per controllare se il numero è assente nell'array
    numeriEstratti.push(numeroRandom); // Se non c'è, lo inserisco
  } else {
    i--; // Decremento la i così da ripetere il ciclo i-esimo
  }
}

console.log(numeriEstratti); // Questo serve per barare...

alert("Tieni in mente questi 5 numeri: " + numeriEstratti + ". Da quando chiuderai questo alert, avrai 30 secondi per ricordarli.");

setTimeout(simonSays, 30000); // Imposto un timer di 30sec prima che la funzione simonSays venga avviata

// Definizione funzioni

// Definisco funzione Simon Says
function simonSays() {
  var numeriUtente = []; // Array che conterrà i numeri univoci inseriti dall'utente
  var numeroFornito = 0;  // Singolo numero fornito dall'utente
  var numeriEsatti = []; // Array che conterrà solo i numeri indovinati

  for (var i = 0; i < 5; i++) {
    numeroFornito = parseInt(prompt("Inserisci il " + (i+1) + "° numero:")); // Chiedo numero per numero

    if(isAbsent(numeriUtente, numeroFornito)) { // Se non è ancora stato fornito, mancherà dall'array numeriUtente
      numeriUtente.push(numeroFornito); // Allora vado a pusharlo nell'array numeriUtente
    } else if(isPresent(numeriUtente, numeroFornito)) {
      alert("Avevi già fornito questo numero, prova con uno diverso!"); // Se l'utente aveva già fornito quel numero
      i--; // Decremento la i e ripeto il ciclo i-esimo
    }
  }

  for (var i = 0; i < numeriUtente.length; i++) { // Adesso scansiono l'array con i numeri univoci inseriti dall'utente
    if(isPresent(numeriEstratti, numeriUtente[i])) { // Se, valore per valore dell'array numeriUtente, un numero è nell'array numeriEstratti (vincenti)
      numeriEsatti.push(numeriUtente[i]); // Faccio push del numero indovinato nell'array numeriEsatti
    }
  }

  alert("Hai indovinato un totale di " + numeriEsatti.length + " numeri, ossia: " + numeriEsatti); // La lunghezza dell'array numeriEsatti sarà pari ai numeri effettivamente indovinati. Dopo di che li mostro con numeriEsatti.
}
// Funzione che genera numeri random fra min e max compresi
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Definisco una funzione che restituisce true se un numero è presente nell'array e false viceversa.
function isAbsent(array, number) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == number) {
      return false;
    }
  }
  return true;
}
// Definisco funzione speculare per motivi di praticità.
function isPresent(array, number) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == number) {
      return true;
    }
  }
  return false;
}
