/** @type {import('@sveltejs/kit').Load } */
export async function load({ params, fetch }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API
    }&language=en-US&query=${params.id}&page=1&include_adult=false`
  );
  const data = await res.json();
  if (data.error) {
    return {
      status: 404,
      error: new Error(data.message),
    };
  }
  return {
    props: { search: params.id, data: data.results },
  };
}
