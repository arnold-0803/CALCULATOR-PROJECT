let firstValue = "";
let secondValue = "";
let operator = null;

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
  if(b === 0) return "MAth Error!";
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
      
      if(operator === null){
        return firstValue += e.target.textContent, display.textContent = firstValue, console.log("1st " + firstValue);
      }else if(operator !== null) {
        return secondValue += e.target.textContent, display.textContent = secondValue, console.log("2nd " + secondValue);
      }
      
    });
  });

  operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
      operator = e.target.textContent;

      display.textContent = operator;

      console.log(operator);
    })
  });
}

updateValue();