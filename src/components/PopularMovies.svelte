<script>
  import MovieCard from "./MovieCard.svelte";

  export let movies;
</script>

<h3>Popular movies</h3>
<div class="popular">
  {#each movies as movie}
    <MovieCard {movie} />
  {/each}
</div>

<style>
  h3 {
    padding: 0 1rem;
  }
  .popular {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
  }
</style>
