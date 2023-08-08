import "dotenv/config";
import express from "express";
import { router } from "./routes/routes";
import cors from "cors";
import urlLogger from "./urlLogger";

export const app = express();

app.use(urlLogger);

app.options(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.use("/", router);
