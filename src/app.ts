import express, { response } from "express";
import { router } from "./routes/routes";
import cors from "cors";

interface movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}


export const app = express();
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
app.options(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to the Movie API!"));

app.get("/movie", (req, res) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log("It has been called");
      // Filter the movies based on a condition (in this case, only keep movies with a rating of 7.5 or higher)
      const filteredMovies = data.results.filter(
        (movie) => movie.vote_average >= 7.5
      );
      // Map the filtered movies to a new array of Movie objects
      const movies = filteredMovies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
      }));
      // Send the array of Movie objects as the response
      res.send(movies);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.get("/test", (req, res) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log("It has been called");
      res.send(data);
    });
});
app.use("/", router);
