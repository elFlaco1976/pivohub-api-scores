import express from "express";
import cors from "cors";
import { getBeers } from "../tools/beers";

const app = express();
const port = 3000 || process.env.PORT;

app.get("/beers", cors(), (req, res) => {
  const beers = getBeers();
  res.send(beers);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});