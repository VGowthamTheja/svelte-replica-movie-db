/** @type {import('@sveltejs/kit').Load } */
export async function load({ fetch }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API
    }&language=en-US&page=1`
  );
  const data = await res.json();
  if (data.error) {
    return {
      status: 404,
      error: new Error(data.message),
    };
  }
  return {
    status: 200,
    props: { popular: data.results },
  };
}
