<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`activity/${params.activity}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { card: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let card;

  $: hasPrev = !!card.prev;
  $: hasNext = !!card.next;
  
  function handleKeys (e) {
    switch(e.which) {
			case 37: // left arrow
				if (hasPrev) window.location.href = card.prev;
				break;
			case 39: // right arrow
				if (hasNext) window.location.href = card.next;
				break;
		}
  }
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	/* .content :global(h2) */
</style>

<svelte:head>
	<title>The Space Deck | Card: {card.title}</title>
</svelte:head>

<svelte:window on:keydown={handleKeys} />

<nav id="activitynav">
  {#if hasPrev}
    <a id="prevcard" href="{card.prev}">&lt;</a>
  {:else}
    <span id="prevcard">&lt;</span>
  {/if}
  {#if hasNext}
    <a id="nextcard" href="{card.next}">&gt;</a>
  {:else}
    <span id="nextcard">&gt;</span>
  {/if}
</nav>
<div class="card {card.suit}">
  <section class="front">
    <p class="suit-name">{card.suit}</p>
    <img class="card-icon" src="{card.icon.src}" alt="{'[Icon for '+card.title+']'}" />
    <img class="card-icon print" src="{card.icon.print}" alt="{'[Icon for '+card.title+']'}" />
    <h1>{card.title}</h1>
    <p class="description">{card.desc}</p>
    <!-- {#if false}
    <div class="related">
      <h3>Related Activities:</h3>
      <p>{#each relatedCards as related}
        <a href="{related.url}">{related.title}</a>(#{related.number})
      {/each}</p>
    </div>
    {/if} -->
  </section>
  <section class="back">
    <h1>{card.title}</h1>
    <div class="notes">{@html card.backText}</div>
  </section>
  <p class="credits">Icons by <a href="{card.suitIcon.link}">{card.suitIcon.creator}</a> and <a href="{card.icon.link}">{card.icon.creator}</a> from the Noun Project</p>
</div>
