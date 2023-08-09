import express from "express";
import * as movieController from "../controllers/movie_controller";
import * as personController from "../controllers/person_controller";
import * as movieDetailsController from "../controllers/moviedetails_controller";

export const router = express.Router();

router.get("/health", movieController.getHealth);

router.get("/movies", movieController.getMovies);

router.get("/search", movieController.getSearch);

router.get("/genres", movieController.getGenres);

router.get("/latest", movieController.getLatest);

router.get("/person/:id", personController.getPersonById);

router.get("/movie/:id", movieDetailsController.getMovie);

router.get('/upcoming', movieController.getUpcomingMovies);

