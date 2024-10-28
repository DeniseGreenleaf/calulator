alert("Hello, this is a simple calculator!");

let num1 = parseFloat(prompt("Enter a number: "));

let num2 =  parseFloat(prompt("Enter a second number: "));

let operator = prompt("Enter an operator (+, -, /, *)");

let result; 
if (operator ==="+") {
    result = num1 + num2;
    alert(`Result: ${num1} + ${num2} = ${result}`);
} else if (operator === "-") {
    result = num1 - num2;
    alert(`Result: ${num1} - {num2} = ${result}`);
} else if (operator === "*") {
    result = num1 * num2;
    alert(`Result: ${num1} * {num2} = ${result}`);
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert(`Result: ${num1} / ${num2} = ${result}`);
    } else {
        alert("Division with 0 not allowed");
    }
} else {
    // Om användaren anger ett ogiltigt räknesätt
    alert("Ooopsie: unvalid operator, use: +, -, * or /.");
}

// Avslutningsmeddelande
alert("thank you for trying the calculator today!");