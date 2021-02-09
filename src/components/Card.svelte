<script>
  export let card;
  export let flippable;

  let flip = false;

  function handleFlip(e) {
    flip = !flip;
  }

</script>

<style>

</style>

<li class="card {card.suit}">
  <a href="{card.url}" class:flippable class:flip on:click|preventDefault={handleFlip}>
    <section class="front">
      <p class="suit-name">{card.suit}</p>
      <img class="card-icon" src="{card.icon.src}" alt="{'[Icon for '+card.title + ((card.icon.alt) ? ': '+card.icon.alt+']' : ']')}" />
      <h1>{card.title}</h1>
      <p class="description">{card.desc}</p>
    </section>
    <section class="back">
      <h1>{card.title}</h1>
      <div class="notes">{@html card.backText}</div>
    </section>
  </a>
  {#if flippable}
  <a class="permalink" href="{card.url}">link</a>
  {/if}
</li>