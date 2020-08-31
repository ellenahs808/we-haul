const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');

const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("I am shonails"));

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/jobs", jobs);





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
