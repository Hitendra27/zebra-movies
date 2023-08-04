import { Request, Response } from "express";
import * as movieService from "../services/movie_service";

export const getmovie = async (
  req: Request<object, object, object, { movieName: string | undefined }>,
  res: Response
) => {
  const movieName = req.query.movieName;
  const movie = movieService.getMovie(movieName);
  res.json(movie).status(200);
};

export const getmovieLover = (req: Request, res: Response) => {
  res.send("I looooooove movie!");
};

export const getSearch = async (
  req: Request<object, object, object, { query: string, page: string }>,
  res: Response
) => {
  const {
    page,
    query
  } = req.query;

  const searchMovieResults = await movieService.search({ page, query });
  if (!searchMovieResults) return res.sendStatus(400);

  res.status(200)
  res.send(searchMovieResults);
}

