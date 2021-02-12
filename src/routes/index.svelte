<script context="module">
  // import shuffle from '../util/shuffle.js';

	export async function preload({ params }) {
		const res = await this.fetch(`activity.json`);
		const data = await res.json();

		if (res.status === 200) {
      // shuffle(data);
			return { cards: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import Card from '../components/Card.svelte';

  export let cards;

</script>

<style>
</style>

<svelte:head>
  <meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@thespacedeck" />
	<meta name="twitter:title" content="The Space Deck" />
	<meta name="twitter:description" content="The Space Deck is a co-created deck of 56 spacemaking cards. Each card presents a prompt for a way to make space in your life and work. Space for you to grow. Space for others to communicate and do their best work." />
	<meta name="twitter:image" content="http://thespacedeck.com/twitter-preview.png" />
	<title>The Space Deck</title>
  <meta name="description" content="The Space Deck is a co-created deck of 56 spacemaking cards. Each card presents a prompt for a way to make space in your life and work. Space for you to grow. Space for others to communicate and do their best work.">
  <meta name="keywords" content="spacemaking, stillness, creativity, courage, activist, relational, movement, ritual, environmental, museum, museumcamp, self-care">
  <!-- add a shuffle here? -->
</svelte:head>

<ul class="teaser">
  {#each cards as card}
  <Card {card} flippable={true} />
  {/each}
</ul>