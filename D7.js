/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("------Esercizio1------");
function stringaMaiuscola(a, b) {
  return a.slice(0, 2).toUpperCase() + b.slice(-3).toUpperCase();
}

console.log(stringaMaiuscola("Ciao", "Mondo"));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("------Esercizio 2------");
/* function ArrayRandom(num) {
  const nuovoArray = num.map(
    (random) => random[Math.round(Math.random() * 100)]
  );
  return nuovoArray;
} */
const arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ArrayRandom = arrayNumeri.map((e) => {
  return Math.round(Math.random() * 100);
});
console.log(ArrayRandom);

//const nuovoArrey = arrayDiNumeri.map((e) => {});
/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log("------Esercizio 3------");

function Pari(arrayNum) {
  return arrayNum.filter((elemento) => elemento % 2 === 0);
}

console.log(Pari([6, 3, 8]));

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("------Esercizio 4------");

const arrayOfNumners = [1, 2, 3, 4, 5];
console.log(
  arrayOfNumners.reduce((acc, el) => {
    return acc + el;
  }, 0)
);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log("------Esercizio 5------");

function somma(a) {
  const somma = a.reduce((accumulatore, elemento) => {
    return accumulatore + elemento;
  }, 0);
  return somma;
}

console.log(somma([2, 5, 4, 3]));

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("------Esercizio 6------");

const arrayNumbers = [1, 3, 5];
n = 5;

console.log(
  arrayNumbers.map((e) => {
    return e + n;
  })
);

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("------Esercizio 8------");

const arrayStringhe = ["EPICODE", "is", "great"];
console.log(
  arrayStringhe.map((e) => {
    return e.length;
  })
);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("------Esercizio 9------");

const arrayDispari = [];
let i = 1;
while (i <= 99) {
  arrayDispari.push(i);
  i += 2;
}
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("------Esercizio 10------");
let piuVecchio = parseInt(movies[0].Year);

const filmPiuVecchio = movies.forEach((element) => {
  if (parseInt(element.Year) < parseInt(piuVecchio)) {
    piuVecchio = parseInt(element.Year);
  }
  return piuVecchio;
});

console.log(piuVecchio);
/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("------Esercizio 11------");
let numeroFilm = 0;
const filmcounter = () => {
  movies.forEach((element) => {
    if (element.Title !== "") {
      numeroFilm++;
    }
  });
  return numeroFilm;
};
console.log(filmcounter());

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("------Esercizio 12------");

/* const soloTitoli = () => {
  let nuovoArray = [];
  for (let i = 0; i < movies.length; i++) {
    nuovoArray.push(movies[i].Title);
  }
  return nuovoArray;
};
console.log(soloTitoli()); */

const newArray = movies.map((e) => {
  return e.Title;
});

console.log(newArray);

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("------Esercizio 13------");

const newMillenial = movies.filter((e) => {
  return parseInt(e.Year) >= 2000;
});

console.log(newMillenial);

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("------Esercizio 14------");

/* let imdbID = "tt2395427";
const found = movies.find((element) => element.imdbID === imdbID);

console.log(found); */

// OPPURE:

function mioFilm(mioImbdID) {
  let trova = movies.find((e) => e.imdbID === mioImbdID);
  return trova;
}
console.log(mioFilm("tt2395427"));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("------Esercizio 15------");

/* const sommaAnni = parseInt(movies.Year).reduce((acc, el) => {
  return acc + el;
}, 0);

console.log(sommaAnni); */

/* const FilmAnno = movies.map((e) => {
  return parseInt(e.Year);
});

function sommaAnni() {
  let somma = FilmAnno.reduce((accumulatore, elemento) => {
    return accumulatore + elemento;
  }, 0);
  return somma;
}

console.log(sommaAnni(parseInt(movies.Year)));
 */

function sommaAnni() {
  let somma = movies
    .map((e) => {
      return parseInt(e.Year);
    })
    .reduce((accumulatore, elemento) => {
      return accumulatore + elemento;
    }, 0);
  return somma;
}

console.log(sommaAnni(parseInt(movies.Year)));
