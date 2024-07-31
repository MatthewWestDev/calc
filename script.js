let currentValue = "";
let previousValue = "";
let operator = "";



const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const allclear = document.querySelector(".allclear");
const equals = document.querySelector(".equals");

numbers.forEach((number) => number.addEventListener("click", function(e){
    getNumber(e.target.textContent)
    display.textContent = currentValue;
}))

function getNumber(num){
    if(currentValue.length <= 6){
        currentValue += num;
        console.log("Getting Num ", previousValue, operator, currentValue);
    }
}

operators.forEach((op) => op.addEventListener("click", function(e){
    getOperator(e.target.textContent);
    
}))

function getOperator(op){
    if(previousValue == "" && currentValue == ""){
        console.log("No Nums ", previousValue, operator, currentValue);
        display.textContent = "0";
        return;
    } else if(previousValue == "" && currentValue != ""){
        previousValue = currentValue;
        operator = op;
        currentValue = "";
        console.log("Getting Op and waiting ", previousValue, operator, currentValue);
        display.textContent = previousValue;
    } else if(previousValue != "" && currentValue == ""){
        operator = op;
        console.log("Getting Op and waiting ", previousValue, operator, currentValue);
        display.textContent = previousValue;
    } else if(previousValue != "" && currentValue != ""){
        console.log("Before calc and getting Op ", previousValue, operator, currentValue);
        operate();
        operator = op;
        console.log("After Calc and set Op ", previousValue, operator, currentValue);
        display.textContent = previousValue;
    }
}

allclear.addEventListener("click", function(){
    previousValue = "";
    currentValue = "";
    operator = "";
    display.textContent = "0";
    console.log("Cleared ", previousValue, operator, currentValue);
})

equals.addEventListener("click", function(){
    if(currentValue != "" && previousValue != ""){
    operate();
    operator = "";
    if(display.textContent = "Error"){
        currentValue = "";
        previousValue = "";
        operator = "";
        return;
    } else {
    display.textContent = previousValue;
    console.log("equals ", previousValue, operator, currentValue);
    }
    }
})

/* // operators

const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
const add = (x, y) => x + y;
 */
// operate 

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if(operator === "/" && currentValue === 0){
        console.log("Dividing by zero ", previousValue, operator, currentValue);
        error("Error");
        return;
    } else if (operator === "/") {
        /* result = divide(num1, num2);
        return result; */
        console.log("Dividing ", previousValue, operator, currentValue);
        previousValue /= currentValue;
        currentValue = "";
        console.log("Done dividing ", previousValue, operator, currentValue);
    } else if (operator === "x") {
        console.log("Multiplying ", previousValue, operator, currentValue);
        previousValue *= currentValue;
        currentValue = "";
        console.log("Done multiplying ", previousValue, operator, currentValue);
    } else if (operator === "-") {
        console.log("Subtracting ", previousValue, operator, currentValue);
        previousValue -= currentValue;
        currentValue = "";
        console.log("Done subtracting ", previousValue, operator, currentValue);
    } else if (operator === "+") {
        console.log("Adding ", previousValue, operator, currentValue);
        previousValue += currentValue;
        currentValue = "";
        console.log("Done adding ", previousValue, operator, currentValue);
    }
        
};

function error(errormsg){
    display.textContent = errormsg;
    console.log("error");
    return;
}