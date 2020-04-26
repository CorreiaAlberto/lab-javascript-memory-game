class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0



  }
  shuffleCards(arr) {
    if (!arr) {
      return undefined
    }
    let mixedArr = arr
    var i,
      j,
      temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked++;
      return false;
    } else(card1 === card2); {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false
  }
}