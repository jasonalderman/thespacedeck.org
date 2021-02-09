<script>
	import Menu from '../components/Menu.svelte';

	export let segment;
  let open = false;
</script>

<style>
</style>

<header class="header" role="banner">
  <a rel=prefetch class="logo" aria-current="{segment === undefined ? 'page' : undefined}" href=".">
    <img src="img/spacedeck-logo.svg" alt="SPACE DECK" />
  </a>
  <a id="menutoggle" class:open on:click|preventDefault|stopPropagation="{() => open = !open}">Menu</a>
  <Menu {segment}/>
</header>

<main class="main {segment}" role="main">
	<slot></slot>
</main>