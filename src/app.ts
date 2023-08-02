import express, { response } from "express";
import { router } from "./routes/routes";

export const app = express();

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Movie API!"));

app.get('/test', (req, res) => {
    fetch(API_URL)
    .then((res) => res.json())
    .then ((data) => {
        console.log(data)
    })

})



app.use("/", router);
