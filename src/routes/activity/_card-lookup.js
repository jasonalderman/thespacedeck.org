import cards from './_cards.js';

const cardsLookup = {};
cards.forEach((card) => {
  if (!cardsLookup[card.suit]) {
    cardsLookup[card.suit] = [];
  }
  cardsLookup[card.suit].push(card);
});

export default cardsLookup;