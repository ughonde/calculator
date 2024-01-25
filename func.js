let displayValue = "";
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
  const display = document.getElementById("output");
  display.textContent = displayValue;
}

function addTODisplay(number) {
  if (displayValue === "0" || waitingForSecondOperand) {
    displayValue = String(number);
    waitingForSecondOperand = false;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function addDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}
function setOperator(op) {
  if (operator !== null && waitingForSecondOperand) {
    calculate();
  }
  operator = op;
  waitingForSecondOperand = true;
  displayValue = "0";
  updateDisplay();
  document.getElementById("output").innerText = operator;
}

function calculate() {
  const display = parseFloat(displayValue);
  let result = parseFloat(displayValue);
  switch (operator) {
    case "+":
      result += display;
      break;
    case "-":
      result -= display;
      break;
    case "*":
      result *= display;
      break;
    case "/":
      result /= display;
      break;
  }
  displayValue = String(result);
  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}
