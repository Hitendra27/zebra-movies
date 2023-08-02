import { Request, Response } from "express";
import * as movieService from "../services/movie_service";

export const getmovie = async (
  req: Request<object, object, object, { movieName: string | undefined }>,
  res: Response
) => {
  const movieName = req.query.movieName;
  const movie = movieService.getmovie(movieName);
  res.json(movie).status(200);
};

export const getmovieLover = (req: Request, res: Response) => {
  res.send("I looooooove movie!");
};
