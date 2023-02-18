<script>
  import { fly } from "svelte/transition";
  import MovieCard from "../../../components/MovieCard.svelte";

  export let data;
  console.log(data);
</script>

<h1>Search for "{data.props.search}"</h1>
<hr />
<div
  class="searched-movies"
  in:fly={{ y: 50, duration: 500, delay: 500 }}
  out:fly={{ duration: 500 }}
>
  {#if data.props.data.length}
    {#each data.props.data as movie}
      <MovieCard {movie} />
    {/each}
  {:else}
    <h2>No movies found</h2>
  {/if}
</div>

<style>
  .searched-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
  }
</style>
