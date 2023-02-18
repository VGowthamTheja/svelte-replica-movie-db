<script>
  import { goto } from "$app/navigation";
  let inputValue = "";

  function submitSearch() {
    goto(`/search/${inputValue}`);
  }
</script>

<form class="search" on:submit|preventDefault={submitSearch}>
  <label for="movieSearch">Search Movie</label>
  <input bind:value={inputValue} type="text" id="movieSearch" />
  <button>search</button>
</form>

<style>
  .search {
    width: 30%;
    position: relative;
    margin: 1rem;
    display: flex;
  }
  label {
    font-weight: bold;
  }
  button {
    font-size: 0.7rem;
    padding: 0rem 1rem;
    background-color: rgb(96, 110, 201);
    color: white;
    font-weight: bold;
    border: none;
    position: absolute;
    bottom: 50%;
    right: 0;
    transform: translate(100%, 50%);
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    text-transform: capitalize;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgb(96, 110, 201);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
    background-color: rgb(96, 110, 201, 0.8);
    color: white;
    transition: background 0.75s ease-out;
    font-weight: bold;
  }
</style>
