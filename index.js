require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./src/routes/user.routes");

const PORT = 8082;

const DB_URI = "mongodb://127.0.0.1:27017/earnest";
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Connected to database at ${DB_URI} ...`);
  })
  .catch((err) => {
    console.log(
      `Could not connect to database at ${DB_URI} because of ${err.message}`
    );
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>something</h1");
});

app.use("/users", userRoutes);


app.listen(PORT, () => {
  console.log("Server started on ", PORT);
});
