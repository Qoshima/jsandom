
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("calc-result");

function calculate(operator) {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Result: Please enter valid numbers!";
        return;
    }

    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultDisplay.textContent = "Result: Division by zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = "Result: Invalid operator!";
            return;
    }

    resultDisplay.textContent = "Result: " + result;
}

document.getElementById("btn-add").addEventListener("click", function() {
    calculate('+');
});

document.getElementById("btn-subtract").addEventListener("click", function() {
    calculate('-');
});

document.getElementById("btn-multiply").addEventListener("click", function() {
    calculate('*');
});

document.getElementById("btn-divide").addEventListener("click", function() {
    calculate('/');
});
