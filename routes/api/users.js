const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const keys = require('../../config/keys');


router.post("/register", (req, res) => {
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user has already registered with this address" });
    } else {
        const newUser = new User({
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;
