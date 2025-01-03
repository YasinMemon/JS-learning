const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const defaultNumber = 0;
let currentResult = defaultNumber

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function getData(){
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNum){
  const calcDescription = `${resultBefore} ${operator} ${calcNum}`
  outputResult(currentResult, calcDescription)
}

function add(){
  const usrEnteredNumber = getData();
  const initialResult = currentResult;

  currentResult = initialResult + usrEnteredNumber
  createAndWriteOutput("+", initialResult, currentResult);
  userInput.value = ""
}
function sub(){
  const usrEnteredNumber = getData();
  const initialResult = currentResult;

  currentResult = initialResult - usrEnteredNumber
  createAndWriteOutput("-", initialResult, currentResult);
  userInput.value = ""
}
function mul(){
  const usrEnteredNumber = getData();
  const initialResult = currentResult;

  currentResult = initialResult * usrEnteredNumber
  createAndWriteOutput("X", initialResult, currentResult);
  userInput.value = ""
}
function div(){
  const usrEnteredNumber = getData();
  const initialResult = currentResult;

  currentResult = initialResult / usrEnteredNumber
  createAndWriteOutput("/", initialResult, currentResult);
  userInput.value = ""
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);