// Scăderea a două numere:

function scade(num1, num2) {
  return num1 - num2;
}
console.log(scade(10, 4));

// Scăderea a mai multor numere dintr-un array:

function scadeArray(numere) {
  return numere.reduce((total, num) => total - num);
}
console.log(scadeArray([20, 5, 3]));

// Scăderea numerelor de la N la 1:

function scadePanaLa1(N) {
  let diferenta = 0;
  for (let i = N; i >= 1; i--) {
    diferenta -= i;
  }
  return diferenta;
}
console.log(scadePanaLa1(5));

// Scăderea a două numere cu validare:

function scadeCuValidare(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Te rog introduci doar numere.";
  }
  return num1 - num2;
}
console.log(scadeCuValidare(10, "b"));

// Scăderea valorilor minime și maxime dintr-un array:

function scadeMinMax(numere) {
  const minim = Math.min(...numere);
  const maxim = Math.max(...numere);
  return maxim - minim;
}
console.log(scadeMinMax([10, 2, 8, 5]));

// Scăderea unui număr fix dintr-un array de numere:

function scadeDinArray(numere, numarDeScazut) {
  return numere.map((num) => num - numarDeScazut);
}
console.log(scadeDinArray([10, 20, 30], 5));

//Scăderea numerelor dintr-un string:

function scadeNumereString(input) {
  return input
    .split("-")
    .map(Number)
    .reduce((total, num) => total - num);
}
console.log(scadeNumereString("20-5-3"));
// Scăderea a două numere imutabile (folosind const):

function scadeImutabile(num1, num2) {
  const rezultat = num1 - num2;
  return rezultat;
}
console.log(scadeImutabile(15, 7));

//Scăderea valorilor dintr-un obiect:

function scadeDinObiect(obiect) {
  return obiect.valoare1 - obiect.valoare2;
}
console.log(scadeDinObiect({ valoare1: 50, valoare2: 20 }));

// Scăderea numerelor în ordine descrescătoare:

function scadeDescrescator(numere) {
  return numere.sort((a, b) => b - a).reduce((total, num) => total - num);
}
console.log(scadeDescrescator([5, 2, 8]));

// Scăderea pe baza unui criteriu:

function scadeDaca(numere, criteriu) {
  return numere
    .filter((num) => num > criteriu)
    .reduce((total, num) => total - num, 0);
}
console.log(scadeDaca([10, 20, 30, 40], 15));

// Scăderea unui procent dintr-un număr:

function scadeProcent(numar, procent) {
  const scadere = (procent / 100) * numar;
  return numar - scadere;
}
console.log(scadeProcent(100, 20));
