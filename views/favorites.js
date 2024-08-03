function getFavorites() {
    return JSON.parse(localStorage.getItem('affirmationFavorites')) ?? [];
};

let favoritesDisplay = document.getElementById('favoritesDisplay');

let list = document.createElement('ol');

let storedFavorites = getFavorites();

for (let i = 0; i < storedFavorites.length; i++) {
    let item = document.createElement('li');
    item.innerText = storedFavorites[i];
    list.appendChild(item);
};

favoritesDisplay.appendChild(list);

function clearAllFavorites() {
    localStorage.clear();
    favoritesDisplay.removeChild(list);
}

let clearButton = document.getElementById('clearFavorites');

clearButton.addEventListener('click', () => {
    clearAllFavorites();
});