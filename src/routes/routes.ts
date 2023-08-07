import express from "express";
import * as movieController from "../controllers/movie_controller";

export const router = express.Router();


router.get('/movies', movieController.getMovies);

router.get('/search', movieController.getSearch);

router.get('/genres', movieController.getGenres);

router.get('/latest', movieController.getLatest);