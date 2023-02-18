<script>
  export let data;
  console.log(data);
</script>

<div class="movie-details">
  <div class="img-container">
    <img
      src={`https://image.tmdb.org/t/p/original/${data.props.data.backdrop_path}`}
      alt={data.props.data.original_title}
    />
  </div>
  <div class="txt-container">
    <h1>{data.props.data.original_title}</h1>
    <p class="overview">{data.props.data.overview}</p>
    <p class="props">
      <span>Status: </span>
      <span class="status">{data.props.data.status}</span> <br />
      <span>Tagline: </span>
      {data.props.data.tagline} <br />
      <span>Release Date: </span>
      {data.props.data.release_date} <br />
      <span>Original Language: </span>
      {data.props.data.original_language} <br />
      <span>Genres: </span>
      {data.props.data.genres.map((genre) => genre.name).join(", ")} <br />
      <span>Production Companies: </span>
      {data.props.data.production_companies
        .map((company) => company.name)
        .join(", ")} <br />
      <span>Production Countries: </span>
      {data.props.data.production_countries
        .map((country) => country.name)
        .join(", ")} <br />
      <span>Languages Available: </span>
      {data.props.data.spoken_languages
        .map((language) => language.name)
        .join(", ")} <br />
      <span>Budget: </span>
      $ {data.props.data.budget} USD<br />
      <span>Revenue: </span>
      $ {data.props.data.revenue} USD<br />
      <span>Runtime: </span>
      {data.props.data.runtime} mins <br />
      <span>Vote Average: </span>
      {Math.round(data.props.data.vote_average)} %<br />
    </p>
  </div>
</div>

<style>
  h1 {
    padding: 1rem 0rem 2rem;
  }
  p {
    padding: 1rem 0rem;
    margin: 0;
    line-height: 1.5;
  }
  .img-container {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  .movie-details {
    margin: 2rem 20%;
  }
  span {
    font-weight: bold;
    margin-top: 1.5rem;
    color: black;
  }
  .overview {
    font-size: 1.2rem;
  }
  .props {
    font-weight: 400;
    color: #585858;
  }
  .status {
    background-color: #4caf50;
    color: white;
    padding: 0.3rem 0.7rem;
    border-radius: 1rem;
    text-transform: uppercase;
    font-size: 0.85rem;
  }
</style>
