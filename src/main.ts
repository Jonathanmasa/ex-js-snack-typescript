// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
let data: unknown = "ciao";
if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (typeof data === "number") {

  // Se è un numero: moltiplicalo per due e stampalo
  console.log(data * 2);
} else if (typeof data === "boolean") {

  // Se è un booleano: stampa “Sì” o “No” in base al suo valore
  console.log(data ? "Sì" : "No");
} else {

  // In tutti gli altri casi: stampa “Tipo non supportato”
  console.log("Tipo non supportato");
}


// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
};



// 🏆 Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

// Developer
// livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
// linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
// certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
// ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
// budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
// stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior";
  linguaggi?: string[];
  certificazioni: string[];
};
type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito?: number;
  stakeholderPrincipali: string[];
};

const operatore : Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  annoNascita: 1985,
  sesso: "m",
  anniDiServizio: [2010, 2012, 2015]
};
console.log(operatore);
