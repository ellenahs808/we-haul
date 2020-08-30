const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");

app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const User = require("./models/User");


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => res.send("I am shonails"));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
