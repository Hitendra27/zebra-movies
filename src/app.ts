import express from "express";
import { router } from "./routes/routes";
import cors from 'cors'

export const app = express();

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

app.options('*', cors({
    origin: true,
    credentials: true
}))

const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJhNDJlYjU3YTVjM2Y5Y2U4Y2U1YmY4M2U1NjIwMSIsInN1YiI6IjY0Y2JiZWU1Nzg1NzBlMDExZTUzZjZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bSkIGEeiWScqFM0nIyIPqBzyM1A1EgtGpz0xJ0akZgc',
  },
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Movie API!'));

app.get('/test', (req, res) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log('It has been called');
      res.send(data);
    })
    .catch((err) => console.error(err));
});

app.get('/filter', (req, res) => {
  const genre = req.query.with_genres;
  const GENRE_API_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-GB&page=1&sort_by=vote_average.desc&with_genres=${genre}`;

  fetch(GENRE_API_URL, apiOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Movie genre filter api has been called');
      res.send(data);
    })
    .catch((err) => console.error(err));
});
app.use("/", router);
