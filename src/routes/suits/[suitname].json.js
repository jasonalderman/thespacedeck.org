import suits from './_suits.js';
import cards from '../activity/_card-lookup.js';

const lookup = new Map();
suits.forEach(suit => {
  suit.cards = cards[suit.title];
  lookup.set(suit.title, JSON.stringify(suit));
});

export function get(req, res, next) {
  // the `suitname` parameter is avaiable because 
  // this file is called [suitname].json.js
  const { suitname } = req.params;

  if (lookup.has(suitname)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    
    res.end(lookup.get(suitname));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: 'Not found'
    }));
  }
}