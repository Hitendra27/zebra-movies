import { Request, Response } from "express";
import * as movieService from "../services/movie_service";

export const getMovies = async (
  req: Request<object, object, object>,
  res: Response
) => {
  const movies = await movieService.getMovies();
  res.json(movies).status(200);
};

export const getSearch = async (
  req: Request<object, object, object, { query: string; page: string }>,
  res: Response
) => {
  const { page, query } = req.query;

  const searchMovieResults = await movieService.search({ page, query });
  if (!searchMovieResults) return res.sendStatus(400);

  res.status(200);
  res.send(searchMovieResults);
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
