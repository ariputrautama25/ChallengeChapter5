require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;

const fs = require("fs");

const { HTTP_PORT = 8000 } = process.env;

const router = require("./routes");
app.use(router);

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const file = fs.readFileSync("./docs.yaml", "utf8");

// 404
app.use((req, res, next) => {
  return res.status(404).json({
    message: "404 Not Found!",
  });
});

// 500
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(port, () => console.log("listening on port ", port));
