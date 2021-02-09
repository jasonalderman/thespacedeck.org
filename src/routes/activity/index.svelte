<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`activity.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { cards: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
import { goto } from '@sapper/app';

export let cards;
let randomIndex = Math.floor(Math.random()*(cards.length-0.5));
let newCardUrl = cards[randomIndex].url;
goto(newCardUrl);

function handleClick() {
  goto(newCardUrl);
}
</script>

<style>
  div {
    height: 28em;
    width: 20em;
    border: solid 1px #999;
    border-radius: 20px;
    margin: 0 auto;
  }
  em {
    font-style: italic;
    padding: 13.5em 1em;
    display: block;
    text-align: center;
  }
</style>

<div on:click="{handleClick}"><em>Loading a random activity...</em></div>