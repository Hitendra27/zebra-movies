import { Request, Response } from "express";
import { getMovieById } from "../services/moviedetails_service";
import { MovieDetails } from "../types/interfaces";

export const getMovie = async (req: Request<{ id: string }>, res: Response) => {
  const movieId = req.params.id;
  if (!movieId || typeof movieId !== "string") {
    return res.sendStatus(400);
  }
  const movieDetails: MovieDetails | null = await getMovieById(movieId);
  if (!movieDetails) return res.sendStatus(400);
  res.status(200).json(movieDetails);
};
