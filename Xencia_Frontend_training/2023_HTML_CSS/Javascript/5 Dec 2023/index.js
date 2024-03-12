
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}

function percentile(a, b) {
    return a % b;
}


var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var operation = prompt("Choose an operation: addition, subtraction, multiplication, division or modulus");


switch (operation) {
    case "addition":
        alert("Result: " + add(num1, num2));
        break;

    case "subtraction":
        alert("Result: " + subtract(num1, num2));
        break;

    case "multiplication":
        alert("Result: " + multiply(num1, num2));
        break;

    case "division":
        alert("Result: " + divide(num1, num2));
        break;

    case "modulus":
        alert("Result: " + percentile(num1, num2));
        break;

    default:
        alert("Invalid operation and check if operaation is in lowercase");
}
