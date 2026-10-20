const hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "#ff4d4d";
    hoverBox.textContent = "You are inside!";
});
hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "#ffffff";
    hoverBox.textContent = "Hover over me!";
});