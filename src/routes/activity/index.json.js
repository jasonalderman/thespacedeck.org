import cards from './_cards.js';
import suits from '../suits/_suit-lookup.js';

const contents = JSON.stringify(cards.map(card => {
  const suit = suits[card.suit];
  card.suitIcon = {};
  card.suitIcon.creator = suit.icon.creator;
  card.suitIcon.link = suit.icon.link;
	return card;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}