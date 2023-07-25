document.addEventListener("DOMContentLoaded", function() {

//global variables

let operator;
let result;
let previousResult; // New variable to store the previous result
let firstNum; 
let secondNum;

// operators functions
function add(a,b){

    return a+b;
}

function subtract(a,b){

    return a-b;
}

function multiply(a,b){

    return a*b;
}

function divide(a,b){

    return a/b;
}

//putting all the above to work
function operate(firstNum,secondNum,operator) {
 
    if (operator == "+"){
        result = add(firstNum,secondNum);
    } else if (operator == "-"){
        result = subtract(firstNum,secondNum);
    } else if (operator == "x"){
        result = multiply(firstNum,secondNum);
    } else if (operator == "/") {
        result = divide(firstNum,secondNum);
    }
    return result;
}

//functions to populate the display when user clicks on number buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
let display = document.getElementById("display");

const numberButtons = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine");

numberButtons.forEach(function(button) {
button.addEventListener("click", function() {
display.value += button.textContent;
if (operator == undefined) {
firstNum = parseFloat(display.value);
} else {
    secondNum = parseFloat(display.value);
}
});
});

// Event listener for the dot button (.)
decimalButton.addEventListener("click", function() {
    // Check if the display value already contains a decimal point
    if (!display.value.includes(".")) {
      // Add the decimal point if it's not already present
      display.value += ".";
    }
  });

// Event listener for clear button (C) to reset the calculator
clearButton.addEventListener("click", function() {
display.value = "";
firstNum = undefined;
secondNum = undefined;
operator = undefined;
previousResult = undefined;
  });

  // Event listener for delete button

deleteButton.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
  });  

function calculate() {
    if (firstNum !== undefined && operator !== undefined) {
      secondNum = parseFloat(display.value);
      result = operate(firstNum, secondNum, operator);

      display.value = result;
      console.log(display.value);

      previousResult = result;
      operator = undefined;
    }
  }

  // Event listener for operator buttons (+, -, x, /)
  addButton.addEventListener("click", function () {
    calculate(); // Perform calculation before updating the operator
    operator = "+";
    firstNum = parseFloat(display.value);
    display.value = "";
  });

  subtractButton.addEventListener("click", function () {
    calculate(); // Perform calculation before updating the operator
    operator = "-";
    firstNum = parseFloat(display.value);
    display.value = "";
  });

  multiplyButton.addEventListener("click", function () {
    calculate(); // Perform calculation before updating the operator
    operator = "x";
    firstNum = parseFloat(display.value);
    display.value = "";
  });

  divideButton.addEventListener("click", function () {
    calculate(); // Perform calculation before updating the operator
    operator = "/";
    firstNum = parseFloat(display.value);
    display.value = "";
  });

  // Event listener for the equals button (=)
  equalsButton.addEventListener("click", function () {
    calculate(); // Perform the final calculation
    firstNum = previousResult; // Set firstNum to previousResult to start a new calculation if desired
    previousResult = undefined; // Clear previousResult after the final calculation
  });

  });
