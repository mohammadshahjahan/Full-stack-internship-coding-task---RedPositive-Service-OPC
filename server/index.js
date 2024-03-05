const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const personRouter = require("./routes/person");
const port = 4000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/person", personRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "hobbies",
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
