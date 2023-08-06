
interface moviesProp {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJhNDJlYjU3YTVjM2Y5Y2U4Y2U1YmY4M2U1NjIwMSIsInN1YiI6IjY0Y2JiZWU1Nzg1NzBlMDExZTUzZjZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bSkIGEeiWScqFM0nIyIPqBzyM1A1EgtGpz0xJ0akZgc',
  },
};

export const getMovies = async (): Promise<moviesProp[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Bad response");
    }
    const data = await response.json();
    const filteredMovies: moviesProp[] = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path
    }));
    return filteredMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("An error occurred while fetching movies");
  }
};

export const search = async ({
  page = '1',
  query,
}: {
  page: string;
  query: string;
}) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false&language=en-US&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
    const response = await fetch(url);
    const searchMovieResults = await response.json();
    return searchMovieResults;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGenres = async () => {
  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
    const response = await fetch(url, options);
    const genreResults = await response.json();
    return genreResults;
  } catch (error) {
    console.error(error);
    return null;
  }
};
