// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.

//creare array con numeri da 1 a 100
const gridSize = 100;
const gridArray = [];
for (let i = 0; i < gridSize; i++) {
  gridArray.push(i);
}
console.log(gridArray);

//prelevare gridContainer
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridArray.length; i++) {
  const newNumber = gridArray[i] + 1;
  //creare elemento html
  const gridItem = document.createElement("div");
  //aggiungere span con numero
  gridItem.innerHTML = `<span>${newNumber}</span>`;
  //aggiungere classe .grid-item
  gridItem.classList.add("grid-item");
  //aggiungere gestione click
  gridItem.addEventListener("click", function () {
    this.classList.add("active");
  });
  //appendere gridItem
  gridContainer.append(gridItem);
}

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
