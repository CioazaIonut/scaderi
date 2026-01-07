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
