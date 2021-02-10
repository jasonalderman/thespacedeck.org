<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`search.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { index: data?.index, lookup: data?.lookup };
		} else {
			this.error(res.status, data.message);
		}
  }
</script>

<script>
  import lunr from 'lunr';
  import Card from '../../components/Card.svelte';

  export let index;
  // export let lookup;

  export let query ='';

  let idx = lunr.Index.load(index);
  let results = [];

  function handleSubmit() {
    results = idx.search(query);
  }
</script>

<div class="search">
  <form on:submit={handleSubmit}>
    <input type="search" name="q" value="{query}">
    <input type="submit" value="Search" on:click|preventDefault={handleSubmit}>
  </form>
  <p><b>e.g.</b> write, list, outside, others, reflect, change, share, sit, draw, etc.</p>
  <p>Search isn't really working yet! This is how many search results you have: {results.length}</p>
  <!-- {#each results as card}
    <Card {card} flippable={true} />
  {:else}
    <div>No results yet :(</div>
  {/each} -->

</div>