<script>
  import PopularMovies from "../components/PopularMovies.svelte";
  import SearchMovie from "../components/SearchMovie.svelte";

  export let data;
</script>

<section>
  <SearchMovie />
  <hr />
  <PopularMovies movies={data.props.popular} />
</section>
