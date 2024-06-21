let num1;
let num2;
let operator;
let result;


// operators

const divide = (x, y) => x / y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
const add = (x, y) => x + y;

// operate 

function operate(num1, operator, num2) {
    if (operator == divide) {
        result = divide(num1, num2);
        return result;
    } else if (operator == multiply) {
        result = multiply(num1, num2);
        return result;
    } else if (operator == subtract) {
        result = subtract(num1, num2);
        return result;
    } else if (operator == add) {
        result = add(num1, num2);
        return result;
    }
};
num1 = 2;
num2 = 3;
operator = multiply;
console.log(operate());