import { Request, Response } from "express";
import * as movieService from "../services/movie_service";

export const getNewMovieReleases = async (
  req: Request<object, object, object, { movieName: string | undefined }>,
  res: Response
) => {
  const movieName = req.query.movieName;
  const movie = movieService.getMovie(movieName);
  res.json(movie).status(200);
};
