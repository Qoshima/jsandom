const list = document.getElementById('dynamic-list');
const addItemButton = document.getElementById('add-btn');
const removeItemButton = document.getElementById('remove-btn');

addItemButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    list.appendChild(newItem);
});

removeItemButton.addEventListener('click', function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    } else {
        alert("No items to remove.");
    }
});