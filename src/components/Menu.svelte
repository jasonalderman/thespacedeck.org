<script>
	export let segment;

</script>

<style>
	/* all styles in global .css */
</style>

<nav role="navigation">
	<ul class="menu">
	  <li><a class:active="{segment === 'about' ? 'page' : undefined}" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
		<li><a rel=prefetch class:active="{segment === 'suits' ? 'page' : undefined}" aria-current="{segment === 'suits' ? 'page' : undefined}" href="suits">suits</a></li>
		<li><a rel=prefetch href="activity">random</a></li>
		<li><a rel=prefetch class:active="{segment === 'search' ? 'page' : undefined}" aria-current="{segment === 'search' ? 'page' : undefined}" href="search">search</a></li>
		<li><a href="https://www.thegamecrafter.com/games/the-space-deck">buy a deck</a></li>

		<!-- for the suits link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
	</ul>
</nav>

