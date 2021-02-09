<script context="module">
	export function preload() {
		return this.fetch(`suits.json`).then(r => r.json()).then(suits => {
			return { suits };
		});
	}
</script>

<script>
  export let suits;
</script>

<svelte:head>
	<title>The Space Deck | Suits</title>
  <meta name="description" content="The Space Deck is a co-created deck of 56 spacemaking cards. Each card presents a prompt for a way to make space in your life and work. Space for you to grow. Space for others to communicate and do their best work.">
  <meta name="keywords" content="spacemaking, stillness, creativity, courage, activist, relational, movement, ritual, environmental, museum, museumcamp, self-care">
</svelte:head>

<style></style>

<ul class="suits teaser">
{#each suits as suit}
  <li>
    <a rel=prefetch href="{suit.url}">
      <img src="{suit.icon.src}" alt="{suit.icon.alt}" >
      <h3>{suit.title}</h3>
    </a>
  </li>
{/each}
</ul>