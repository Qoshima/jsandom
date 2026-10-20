const inputField = document.getElementById("text-input");
const outputDisplay = document.getElementById("output-display");
inputField.addEventListener("keyup", function(event) {
    let currentText = event.target.value;
    outputDisplay.textContent = "Current value: " + currentText;
    if (currentText === "") {
        outputDisplay.textContent = "Current value: ";
    }
});