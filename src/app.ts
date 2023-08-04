import express, { response } from "express";
import { router } from "./routes/routes";
import cors from 'cors'

export const app = express();

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

app.options('*', cors({
    origin: true,
    credentials: true
}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:5173');
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Movie API!"));

app.get("/test", (req, res) => {
  fetch(API_URL)
    .then((res) => res.json())
<<<<<<< HEAD
    .then((data) => {
      console.log(data);
    });
});
=======
    .then ((data) => {
        console.log("It has been called");

        res.send(data)
    })

})


>>>>>>> 08c8830ee25047251516f8cce836bfbf85312f2a

app.use("/", router);
