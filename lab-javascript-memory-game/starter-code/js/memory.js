class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }
   shuffleCards = () => {
    this.cards.sort(function () {
      return Math.random() - 0.5;
    });
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      this.pickedCards = []
      return true
    }
    else{
      this.pickedCards = []
      return false
    }
  }
  
  isFinished() {
    if (this.cards.length/2===this.pairsGuessed){
      shuffleCards()
    }else{
      return false;
    }
  }
}