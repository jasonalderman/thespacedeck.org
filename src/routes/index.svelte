<script context="module">
	export async function preload({ params }) {
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
  import Card from '../components/Card.svelte';

  export let cards;

  console.log(cards[0]);
  // Fisher-Yates shuffling algorithm, from 
  // https://javascript.info/task/shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

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
</svelte:head>

<ul class="teaser">
  {#each cards as card}
  <Card {card} flippable={true} />
  {/each}
</ul>