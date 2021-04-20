const datatypeConverter = require("../util-datatype-converter");

let currentNumber = 0,
  threeCounter = 0;
let fiveCounter = [0, 0, 0, 0, 0].length;

function fizzBuzzGenerator() {
  let result = "";
  for (; currentNumber < 100; currentNumber++)
    result += fizzBuzzCalculator(currentNumber) + " ";
  const trimmedResult = result.substring(0, result.length - 1);
  console.log(trimmedResult);
  return trimmedResult;
}

function buzz() {
  fiveCounter = [0, 0, 0, 0, 0].length;
  const hexBuzz = "42757a7a";
  let buzzResult = String.fromCharCode.apply(
    null,
    datatypeConverter.parseHexString(hexBuzz) // "buzz"
  );
  return buzzResult;
}

function fizz() {
  threeCounter = 0;
  const hexFizz = "46697a7a";
  let fizzResult = String.fromCharCode.apply(
    null,
    datatypeConverter.parseHexString(hexFizz) // "fizz"
  );
  return fizzResult;
}

function fizzBuzzCalculator(currentNumber) {
  threeCounter++;
  fiveCounter--;
  const binaryThree = 0b11; // 0b11 == 3
  const isFizz = threeCounter == binaryThree;
  const isBuzz = fiveCounter == 0;
  let result = isFizz || isBuzz ? "" : currentNumber + 1;
  if (isFizz) result += fizz();
  if (isBuzz) result += buzz();
  return result;
}

module.exports.fizzBuzzGenerator = fizzBuzzGenerator;
