const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let operand1 = "";
let operand2 = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    
    if (!isNaN(buttonValue) || buttonValue === ".") {
      if (operator === "") {
        operand1 += buttonValue;
        result.innerText = operand1;
      } else {
        operand2 += buttonValue;
        result.innerText = operand2;
      }
    }

    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      operator = buttonValue;
    }

    if (buttonValue === "=") {
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);
      let answer = "";

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

      result.innerText = answer;

      operand1 = answer;
      operand2 = "";
      operator = "";
    }

    if (buttonValue === "C") {
      result.innerText = "";
      operand1 = "";
      operand2 = "";
      operator = "";
    }
  });
});




