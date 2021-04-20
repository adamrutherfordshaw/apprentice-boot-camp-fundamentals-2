const datatypeConverter = require("../util-datatype-converter");

let currentNumber = 0,
  threeCounter = 0;
let fiveCounter = [0, 0, 0, 0, 0].length;

function fizzBuzzGenerator() {
  let result = "";
  for (; currentNumber < 100; currentNumber++)
    result += fizzBuzzCalculator(currentNumber) + " ";
  console.log(result.substring(0, result.length - 1));
  return result.substring(0, result.length - 1);
}

function buzz() {
  fiveCounter = [0, 0, 0, 0, 0].length;
  let buzzResult = String.fromCharCode.apply(
    null,
    datatypeConverter.parseHexString("42757a7a") // "buzz"
  );
  return buzzResult;
}

function fizz() {
  threeCounter = 0;
  let fizzResult = String.fromCharCode.apply(
    null,
    datatypeConverter.parseHexString("46697a7a") // "fizz"
  );
  return fizzResult;
}

function fizzBuzzCalculator(currentNumber) {
  threeCounter++;
  fiveCounter--;
  let result =
    threeCounter == 0b11 || fiveCounter == 0 ? "" : currentNumber + 1; // 0b11 == 3
  if (threeCounter == 0b11) result += fizz();
  if (fiveCounter == 0) result += buzz();
  return result;
}

module.exports.fizzBuzzGenerator = fizzBuzzGenerator;
