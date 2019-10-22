import express from "express";
import { Client } from "pg";
import "dotenv/config";

//const client = new Client({ user: 'matcha', host: "db"});
const client = new Client({ host: "db" });
client.connect(err => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
