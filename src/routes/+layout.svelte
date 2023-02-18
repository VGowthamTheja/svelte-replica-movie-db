<script>
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Movie DB</title>
</svelte:head>

<Nav />
<div class="container">
  <slot />
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
</style>