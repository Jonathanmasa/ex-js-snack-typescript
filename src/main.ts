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
