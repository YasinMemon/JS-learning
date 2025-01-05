let userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

const defaultNumber = 0;
let currentResult = defaultNumber;

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function getData() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNum) {
  const calcDescription = `${resultBefore} ${operator} ${calcNum}`;
  outputResult(currentResult, calcDescription);
}

function calculate(calculationType) {
  const usrEnteredNumber = getData();
  const initialResult = currentResult;
  let calculationOperator = "";
  if (calculationType === "ADD") {
    calculationOperator = "+";
    currentResult += usrEnteredNumber;
  } else if (calculationType === "SUB") {
    calculationOperator = "-";
    currentResult -= usrEnteredNumber;
  } else if (calculationType === "DIV") {
    calculationOperator = "/";
    currentResult /= usrEnteredNumber;
  } else {
    calculationOperator = "*";
    currentResult *= usrEnteredNumber;
  }
  createAndWriteOutput(calculationOperator, initialResult, usrEnteredNumber);
  userInput.value = ""
}

function add() {
  calculate("ADD")
}
function sub() {
  calculate("SUB")
}
function mul() {
  calculate("MUL")
}
function div() {
 calculate("DIV")
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
