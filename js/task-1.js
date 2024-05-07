function makeTransaction(quantity, pricePerDroid, totalCredits) {
  const totalPrice = quantity * pricePerDroid;
  //console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);

  if (totalPrice <= totalCredits) {
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
  } else {
    console.log(`Insufficient funds!`);
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// 1.1 Zmienne i typy. Podstawa funkcji //

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
