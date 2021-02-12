import cards from '../activity/_cards.js';
import lunr from 'lunr';

let cardsText = [];
// let cardLookup = {};
cards.forEach((card) => {
  cardsText.push({
    id: card.slug,
    title: card.title,
    description: card.desc,
    back: card.backText?.replace(/(\n)/g, " ").replace(/(<([^>]+)>)/gi, "")
  });
  // cardLookup[card.slug] = card;
});

let idx = lunr(function() {
  this.ref('id');
  this.field('title');
  this.field('description');
  this.field('back');

  cardsText.forEach(function(card) {
    this.add(card);
  }, this)
});

const contents = JSON.stringify({index: idx});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}