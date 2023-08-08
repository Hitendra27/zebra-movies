import { MovieDetails, CastMember } from "../types/interfaces";

export const getMovieById = async (
  movieId: string
): Promise<MovieDetails | null> => {
  try {
    const movieUrl = `${process.env.BASE_URL}movie/${movieId}?api_key=${process.env.API_KEY}`;
    const creditsUrl = `${process.env.BASE_URL}movie/${movieId}/credits?api_key=${process.env.API_KEY}`;

    const [movieResponse, creditsResponse] = await Promise.all([
      fetch(movieUrl),
      fetch(creditsUrl),
    ]);

    if (!movieResponse.ok) {
      throw new Error(
        `Movie request failed with status ${movieResponse.status}`
      );
    }
    if (!creditsResponse.ok) {
      throw new Error(
        `Credits request failed with status ${creditsResponse.status}`
      );
    }

    const movieData = await movieResponse.json();
    const creditsData = await creditsResponse.json();

    const movieDetails: MovieDetails = {
      budget: movieData.budget,
      genres: movieData.genres.map((genre: any) => ({
        id: genre.id,
        name: genre.name,
      })),
      homepage: movieData.homepage,
      id: movieData.id,
      overview: movieData.overview,
      poster_path: `https://image.tmdb.org/t/p/w200${movieData.poster_path}`,
      release_date: movieData.release_date,
      revenue: movieData.revenue,
      runtime: movieData.runtime,
      status: movieData.status,
      tagline: movieData.tagline,
      title: movieData.title,
      credits: creditsData.cast as CastMember[],
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
