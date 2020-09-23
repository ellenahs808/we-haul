const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require("../../validations/register");
const validateLoginInput = require("../../validations/login");
const Job = require("../../models/Job");



router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      phoneNumber: req.user.phoneNumber,
      email: req.user.email,
      userType: req.user.userType,
      rating: req.user.rating,
      numberOfRatings: req.user.numberOfRatings
    });
  }
);


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(((user) =>  res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      userType: user.userType,
      rating: user.rating,
      numberOfRatings: user.numberOfRatings
    })))
      .catch((err) => res.status(404).json({nouserfound: 'No user found'}))
})



router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

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
          phoneNumber: req.body.phoneNumber,
          userType: req.body.userType,
          rating: req.body.rating,
          numberOfRatings: req.body.numberOfRatings,
        });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id};

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })            
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // const userType = req.body.userType;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }


   bcrypt.compare(password, user.password).then((isMatch) => {
     if (isMatch) {
       const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            userType: user.userType,
            rating: user.rating,
            numberOfRatings: user.numberOfRatings
          };
       jwt.sign(
         payload,
         keys.secretOrKey,
         // Tell the key to expire in one hour
         { expiresIn: 3600 },
         (err, token) => {
           res.json({
             success: true,
             token: "Bearer " + token,
           });
         }
       );
     } else {
       return res.status(400).json({ password: "Incorrect password" });
     }
   });
    })
})


router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { rating, numberOfRatings } = req.body;

    User.findById(req.params.id).then((user) => {
      user.rating = rating;
      user.numberOfRatings = numberOfRatings;


      user
        .save()
        .then((savedUser) => res.json(savedUser))
        .catch((err) => res.json(err));
    });

    return res;
  }
);


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;
