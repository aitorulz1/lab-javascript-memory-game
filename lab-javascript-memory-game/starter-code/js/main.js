const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
const memoryGame = new MemoryGame(cards);
document.addEventListener("DOMContentLoaded", function(event) { 
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // Add all the divs to the HTML
  
  document.querySelector('#memory_board').innerHTML = html;
  
  // Bind the click event of each element to a function
  
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {                 // --------------- ONCLICK... --------------
   
      let sib = card.nextSibling                // variable sib es igual a carta, 

        card.removeAttribute('back')            // Se da la vuelta a la carta
        card.setAttribute("class", "front")
        sib.removeAttribute('front')
        sib.setAttribute('class', 'back')
  
    // TODO: write some code here
  
  console.log('Card clicked: ', card);
      pickCard(card)
    }; 
  });
});


function pickCard(card) {

  memoryGame.pickedCards.push(card)             // en pickards meto la carta
  
  if (memoryGame.pickedCards.length === 2) {    // Si en pickedCards hay 2 cartas
    let card1 = memoryGame.pickedCards[0]       // carta 1 = primera carta
    let card2 = memoryGame.pickedCards[1]       // carta 2 = segunda carta
  
    if (!memoryGame.checkIfPair(card1.getAttribute('name'), card2.getAttribute('name'))) {    // si NO se cumple checnIfPair, es decir, por el atributo nombre no son iguales la carta 1 y 2,...
      document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked            // En contador vamos sumando +1 de pairsClicked
  
      setTimeout(() => {                                                                      // Después  de 1 segundo y medio
        console.log('yoooou')
        flipBack(card1)                                                                       // Se gira la carta 1 
        flipBack(card2)                                                                       // Se gira la carta 2
      }, 1500)
    }
  
    document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked  // Si el nombre es igual, suma 1 a pairsClicked
    document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed  // Si el nombre es igual, suma 1 a pairsGuessed

    memoryGame.isFinished()
  }
}



function flipBack(card) {
 
  let sib = card.nextSibling
 
    card.removeAttribute('front')
    card.setAttribute("class", "back")
    sib.removeAttribute('back')
    sib.setAttribute('class', 'front')
}