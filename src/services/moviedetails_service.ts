import { MovieDetails } from "../types/interfaces";

export const getMovieById = async (
  movieId: string
): Promise<MovieDetails | null> => {
  try {
    const url = `${process.env.BASE_URL}movie/${movieId}?api_key=${process.env.API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const movieData = await response.json();

    const movieDetails: MovieDetails = {
      backdrop_path: movieData.backdrop_path,
      budget: movieData.budget,
      genres: movieData.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name,
      })),
      homepage: movieData.homepage,
      id: movieData.id,
      overview: movieData.overview,
      poster_path: movieData.poster_path,
      release_date: movieData.release_date,
      revenue: movieData.revenue,
      runtime: movieData.runtime,
      status: movieData.status,
      tagline: movieData.tagline,
      title: movieData.title,
    };

    return movieDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Unknown error occurred.");
    }
    return null;
  }
};
