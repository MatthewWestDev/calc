let currentValue = "";
let previousValue = "";
let operator = "";



const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".digit");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const allclear = document.querySelector(".allclear");

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

decimal.addEventListener("click", function(){
    addDecimal();
    display.textContent = currentValue;
})

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }}

operators.forEach((op) => op.addEventListener("click", function(e){
    getOperator(e.target.value);
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
        console.log("Calc first before calc and getting Op ", previousValue, operator, currentValue);
        operate();
        operator = op;
        console.log("After Calc and set Op ", previousValue, operator, currentValue);
        if(display.textContent === "Error"){
            currentValue = "";
            previousValue = "";
            operator = "";
            console.log("Calc errored Out ", previousValue, operator, currentValue);
        } else{ 
            display.textContent = previousValue;
        console.log("Calc without equals ", previousValue, operator, currentValue);
        }
    }
}

allclear.addEventListener("click", function(){
    previousValue = "";
    currentValue = "";
    operator = "";
    display.textContent = "0";
    console.log("All Cleared ", previousValue, operator, currentValue);
})

equals.addEventListener("click", function(){
    if(currentValue != "" && previousValue != ""){
        operate();
        operator = "";
        if(display.textContent === "Error"){
            currentValue = "";
            previousValue = "";
            operator = "";
            console.log("Equals errored Out ", previousValue, operator, currentValue);
        } else{ 
            display.textContent = previousValue;
        console.log("equals ", previousValue, operator, currentValue);
        }}
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
    if(operator === "divide" && currentValue === 0){
        console.log("Dividing by zero ", previousValue, operator, currentValue);
        errorMsg("Error");
        console.log("After Error dividing by zero");
        return;
    } else if (operator === "divide") {
        /* result = divide(num1, num2);
        return result; */
        console.log("Dividing ", previousValue, operator, currentValue);
        previousValue /= currentValue;
        currentValue = "";
        console.log("Done dividing ", previousValue, operator, currentValue);
    } else if (operator === "multiply") {
        console.log("Multiplying ", previousValue, operator, currentValue);
        previousValue *= currentValue;
        currentValue = "";
        console.log("Done multiplying ", previousValue, operator, currentValue);
    } else if (operator === "subtract") {
        console.log("Subtracting ", previousValue, operator, currentValue);
        previousValue -= currentValue;
        currentValue = "";
        console.log("Done subtracting ", previousValue, operator, currentValue);
    } else if (operator === "add"){
        console.log("Adding ", previousValue, operator, currentValue);
        previousValue += currentValue;
        currentValue = "";
        console.log("Done adding ", previousValue, operator, currentValue);
    }
    console.log("sending to roundNum");
    previousValue = roundNum(previousValue);
    console.log("RoundNum done ", previousValue);
};


function roundNum(num){
    return Math.round(num * 10000) / 10000;
}

function errorMsg(str){
    display.textContent = str;
    console.log("error function completed");
    return;
}
