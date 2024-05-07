function checkForSpam(message) {
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// 1.1 Zmienne i typy. Podstawa funkcji //

// function getElementWidth(content, padding, border) {
//   const contentValue = Number.parseFloat(content);
//   const paddingValue = Number.parseFloat(padding);
//   const borderValue = Number.parseFloat(border);

//   const width = contentValue + paddingValue * 2 + borderValue * 2;

//   //return contentValue + paddingValue * 2 + borderValue * 2;
//   console.log(`${width}`);
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
