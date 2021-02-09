import suits from './_suits.js';

const suitsLookup = {};
suits.forEach((suit) => {
  suitsLookup[suit.title] = suit;
});

export default suitsLookup;