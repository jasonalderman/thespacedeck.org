<script context="module">
  export async function preload({ params }) {

  }
</script>

<script>
  export let query ='';
</script>

<div class="search">
  <form>
    <input type="search" name="q" value="{query}">
    <input type="submit" value="Search">
  </form>
  <p><b>e.g.</b> write, list, outside, others, reflect, change, share, sit, draw, etc.</p>
</div>