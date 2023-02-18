<script>
  export let movie;
</script>

<div class="movie-card">
  <a href={`/movie/${movie.id}`}>
    {#if movie.poster_path}
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
      />
    {:else}
      <img src="https://via.placeholder.com/500x750/000000/FFFFFF?text=NO IMAGE" alt={movie.title} />
    {/if}
  </a>
  <div class="description">
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
  </div>
</div>

<style>
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
  }
  .description {
    height: 5vh;
  }
  p {
    font-size: 0.85rem;
    margin: 0;
  }
  .movie-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
</style>
