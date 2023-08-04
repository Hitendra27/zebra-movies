import express from "express";
import * as movieController from "../controllers/movie_controller";

export const router = express.Router();

router.get("/movie", movieController.getmovie);

router.get("/movielover", movieController.getmovieLover);

router.get("/search", movieController.getSearch);