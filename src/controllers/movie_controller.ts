import { Request, Response } from "express";
import * as movieService from "../services/movie_service";
import { MovieResponse } from "../services/movie_service";

export const getHealth = async (
  req: Request<object, object, object>,
  res: Response
) => {
  console.log("Health check:  Server is running!");
  res.status(200).send("Server is running");
};

export const getMovies = async (
  req: Request<object, object, object>,
  res: Response
) => {
  const movies = await movieService.getMovies();
  res.json(movies).status(200);
};

export const getSearch = async (
  req: Request<object, object, object, { query: string; genres: string[] }>,
  res: Response
) => {
  const { query, genres } = req.query;
  const filterByGenreResults = await movieService.filterByGenres({ genres });
  const searchByStringResults = await movieService.searchByString({ query });

  if (filterByGenreResults === null) return res.sendStatus(400);
  if (searchByStringResults === null) return res.sendStatus(400);

  const combinedResults = searchByStringResults.reduce(
    (acc: MovieResponse[], item: MovieResponse) => {
      return acc.includes(item) ? acc : [...acc, item];
    },
    [...filterByGenreResults]
  );

  res.status(200);
  res.send(combinedResults);
};

export const getGenres = async (
  req: Request<object, object, object>,
  res: Response
) => {
  const genreResults = await movieService.getGenres();
  if (!genreResults) return res.sendStatus(400);

  res.status(200);
  res.send(genreResults);
};

// latest movies
export const getLatest = async (
  req: Request<object, object, object>,
  res: Response
) => {
  const latestResults = await movieService.getLatest();
  if (!latestResults) return res.sendStatus(400);

  res.status(200);
  res.send(latestResults);
};

// Upcoming movies
export const getUpcomingMovies = async (
  req: Request<object, object, object>,
  res: Response
) => {
  const upcomingMoviesResults = await movieService.getUpcomingMovies();
  if (!upcomingMoviesResults) return res.sendStatus(400);

  res.status(200);
  res.send(upcomingMoviesResults);
};
