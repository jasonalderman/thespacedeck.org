import suits from './_suits.js';

const contents = JSON.stringify(suits);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}