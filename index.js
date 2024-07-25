const affirmationLabel = document.getElementById("affirmationlabel");

let myAffirmations = [
    "I am strong.",
    "I am kind.",
    "I am beautiful.",
    "I am enough.",
    "I am capable of anything.",
    "I can reach my goals.",
    "I am loved.",
    "I can learn.",
    "You are awesome.",
    "You are fantastic."
  ];
  
/****************************************************************************
 * 
****************************************************************************/
function generateAffirmation() {
  console.log("hi");
  let randomIndex = Math.floor(Math.random() * 10); //generates random number between 0 and 9
  console.log(randomIndex);

  let oneAffirmation = myAffirmations[randomIndex];
  console.log(oneAffirmation);

  affirmationLabel.innerText = oneAffirmation;
}

const myButton = document.getElementById('changeAffirmations');

myButton.addEventListener('click', () => {
  generateAffirmation();
});

/****************************************************************************
 * 
****************************************************************************/
function saveToFavorites() {
  console.log('saving affirmation');
  
  // let means declaring variable
  let storedFavorites = JSON.parse(localStorage.getItem('affirmationFavorites')) ?? [];

  if (storedFavorites === undefined) {
    console.log('stored favorites not found');
    localStorage.setItem('affirmationFavorites', JSON.stringify([]));
    storedFavorites = JSON.parse(localStorage.getItem('affirmationFavorites')) ?? [];
  }

  console.log(typeof storedFavorites);
  storedFavorites.push(affirmationLabel.innerText);

  localStorage.setItem('affirmationFavorites', JSON.stringify(storedFavorites));

}

const addToFavoritesButton = document.getElementById('addToFavorites');

addToFavoritesButton.addEventListener('click', () => {
  saveToFavorites();
});

/****************************************************************************
 * 
****************************************************************************/
function getFavorites() {
  console.log('getting favorites');
  let storedFavorites = JSON.parse(localStorage.getItem('affirmationFavorites')) ?? [];
  console.log(storedFavorites);
  console.log("I am here");
};

const displayFavoritesButton = document.getElementById('showFavorites');

displayFavoritesButton.addEventListener('click', () => {
  getFavorites();
});