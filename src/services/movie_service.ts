export const getMovie = (name = "Zebra") => {
  return {};
};

export const search = async ({ page = '1', query }: { page: string, query: string }) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false&language=en-US&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    const response = await fetch(url);
    const searchMovieResults = await response.json();
    return searchMovieResults;

  } catch (error) {
    console.error(error)
    return null;
  }
}