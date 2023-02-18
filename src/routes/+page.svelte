<script>
  import PopularMovies from "../components/PopularMovies.svelte";
  import SearchMovie from "../components/SearchMovie.svelte";
  import { fly } from "svelte/transition";

  export let data;
</script>

<section>
  <SearchMovie />
  <hr />
  <div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <PopularMovies movies={data.props.popular} />
  </div>
</section>
