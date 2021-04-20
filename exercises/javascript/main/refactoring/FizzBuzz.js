const datatypeConverter = require("../util-datatype-converter");

let currentNumber = 1;

function fizzBuzzGenerator() {
  let result = "";
  const maxNumber = 100;
  for (; currentNumber <= maxNumber; currentNumber++)
    result += fizzBuzzCalculator(currentNumber) + " ";
  const trimmedResult = result.trim();
  console.log(trimmedResult);
  return trimmedResult;
}

function buzz() {
  return "Buzz";
}

function fizz() {
  return "Fizz";
}

// function isDivisible(currentNumber, divisbleNumber) {
//   const isFizz = currentNumber % 3 === 0;
//   const isBuzz = currentNumber % 5 === 0;
//   let result = "";
//   if (!(isFizz || isBuzz)) result += currentNumber;
//   else {
//     if (isFizz) result += fizz();
//     if (isBuzz) result += buzz();
//   }
//   return result;
// }

function fizzBuzzCalculator(currentNumber) {
  let result = "";

  const isFizz = currentNumber % 3 === 0;
  const isBuzz = currentNumber % 5 === 0;
  //let result = "";
  if (!(isFizz || isBuzz)) result += currentNumber;
  else {
    if (isFizz) result += fizz();
    if (isBuzz) result += buzz();
  }

  //result += isDivisible(currentNumber);

  return result;
}

module.exports.fizzBuzzGenerator = fizzBuzzGenerator;
