import cards from './_cards.js';
import suits from '../suits/_suit-lookup.js'

const lookup = new Map();
cards.forEach(card => {
  // add in the suit icon creator and link
  card.suitIcon = {};
  card.suitIcon.creator = suits[card.suit].icon.creator;
  card.suitIcon.link = suits[card.suit].icon.link;
  // create a lookup table
	lookup.set(card.slug, JSON.stringify(card));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { activity } = req.params;

	if (lookup.has(activity)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(activity));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
