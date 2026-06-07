let firstValue = "";
let secondValue = "";
let operator = null;
let resultDisplayed = false;

// ADITION LOGIC
const add = (a, b) => {
  return a + b;
}

//SUBTRACTION LOGIC
const subtract = (a, b) => {
  return a - b;
}

// MULTIPLICATION LOGIC
const multiply = (a, b) => {
  return a * b;
}

// DIVITION LOGIC
const divide = (a, b) => {
  if(b === 0) return "math error";
  return a / b;
}

// OPERATION LOGIC
const operate = (firstValue, secondValue, operator) => {
  if(operator === "+"){
    return add(firstValue, secondValue);
  }else if(operator === "-"){
    return subtract(firstValue, secondValue);
  }else if(operator === "*"){
    return multiply(firstValue, secondValue);
  }else if(operator === "/"){
    return divide(firstValue, secondValue);
  }
}

// UPDATE VALUES LOGIC
const updateValue = () => {
  const display = document.querySelector(".display-pannel");
  const digitButtons = document.querySelectorAll(".digit");
  const operatorButtons = document.querySelectorAll(".operator");
  const equalButton = document.querySelector("#equal-btn");
  const clearButton = document.querySelector(".clear-btn");

  digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {

      if(resultDisplayed === true){
        firstValue = "";
        secondValue = "";
        operator = null;
        
        resultDisplayed = false;
      }
      
      if(operator === null){
          firstValue += e.target.textContent;
          display.textContent = firstValue;

          console.log({
            firstValue,
            secondValue,
            operator
          });
      }else {
        secondValue += e.target.textContent;
        display.textContent = secondValue;

        console.log({
          firstValue,
          secondValue,
          operator
        });
      }
      
    });
  });

  operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {

      if(firstValue !== "" && secondValue !== ""){
        const result = operate(Number(firstValue), Number(secondValue), operator);

        display.textContent = result;

        firstValue = result;
        secondValue = "";
        operator = null;
      }

      operator = e.target.textContent;

      console.log({
        firstValue,
        secondValue,
        operator
      });
    })
  });

  equalButton.addEventListener("click", () => {
    if(firstValue === "" || secondValue === "" || operator === null ) return;

    const result = operate(Number(firstValue), Number(secondValue), operator);

    if(result === "math error"){
      display.textContent = result;
      return;
    }

    display.textContent = Number(result.toFixed(2));

    firstValue = result;
    secondValue = "";
    operator = null;

    resultDisplayed = true;

    console.log(result);
  });

  clearButton.addEventListener("click", () => {
    firstValue = "";
    secondValue = "";
    operator = null;
    resultDisplayed = false;
    display.textContent = 0;
  });

}

updateValue();

