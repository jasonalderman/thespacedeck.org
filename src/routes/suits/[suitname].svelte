<script context="module">
  import shuffle from '../../util/shuffle';
	export async function preload({ params }) {
		// the `suitname` parameter is available because
		// this file is called [suitname].svelte
		const res = await this.fetch(`suits/${params.suitname}.json`);
		const data = await res.json();

		if (res.status === 200) {
      shuffle(data?.cards);
			return { suit: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import Card from '../../components/Card.svelte';

  export let suit;
  let properCase = (word) => word[0].toUpperCase() + word.substr(1)
</script>

<style>
</style>

<svelte:head>
  <title>The Space Deck | {properCase(suit.title)} Suit</title>
</svelte:head>

<div class="suit-intro">
  <img src="{suit.icon.src}" alt="{suit.icon.alt}" />
  <h2>{suit.title}</h2>
  <p>{suit.desc}</p>
  <p class="credit">Icon by <a href="{suit.icon.link}">{suit.icon.creator}</a> from The Noun Project.</p>
</div>
<ul class="teaser">
  {#each suit.cards as card}
  <Card {card} flippable={true} />
  {/each}
</ul>
