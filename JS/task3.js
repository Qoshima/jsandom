const box = document.getElementById('style-box');
const colorButton = document.getElementById('color-btn');
const fontButton = document.getElementById('font-btn');

colorButton.addEventListener('click', function(){
    box.style.backgroundColor = "#ffcccc";
    box.style.borderColor = "#ff0000";
})

fontButton.addEventListener("click", function() {
    box.style.fontSize = "48px";
});