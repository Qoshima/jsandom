const paragraph = document.getElementById('my-paragraph');
const changeButton = document.getElementById('change-btn');

changeButton.addEventListener('click', function() {
    paragraph.innerHTML = "This is the new text. consectetur adipiscing elit";
});