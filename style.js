// Get the elements from the HTML
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
let preView = document.getElementById("pre-view");
// Create variables for the calculator
let operand1 = "";
let operand2 = "";
let operator = "";

// Add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;

    // Check if the button clicked is a number
    if (!isNaN(buttonValue) || buttonValue === ".") {
      if (operator === "") {
        operand1 += buttonValue;
        result.innerText = operand1;
      } else {
        operand2 += buttonValue;
        result.innerText = operand2;
      }
    }

    // Check if the button clicked is an operator
    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      operator = buttonValue;
    }

    // Check if the button clicked is the equals sign
    if (buttonValue === "=") {
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);
      let answer = "";

      // Perform the operation based on the operator
      switch (operator) {
        case "+":
          answer = num1 + num2;
          break;
        case "-":
          answer = num1 - num2;
          break;
        case "*":
          answer = num1 * num2;
          break;
        case "/":
          answer = num1 / num2;
          break;
        default:
          break;
      }

      // Display the result
      result.innerText = answer;

      // Reset the variables
      operand1 = answer;
      operand2 = "";
      operator = "";
    }

    // Check if the button clicked is the clear button
    if (buttonValue === "C") {
      result.innerText = "";
      operand1 = "";
      operand2 = "";
      operator = "";
    }
  });
});