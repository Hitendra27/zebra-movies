import express from "express";
import * as movieController from "../controllers/movie_controller";
import { getNewMovieReleases } from "../controllers/newMovieReleasesController";

export const router = express.Router();

router.get("/movie", movieController.getmovie);

router.get("/movielover", movieController.getmovieLover);

router.get("/newMovieReleases", getNewMovieReleases);
