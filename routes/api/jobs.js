const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Job = require('../../models/Job')
const jwt = require('jsonwebtoken');


// router.get("/test", (req, res) => res.json({ msg: "This is the jobs route" }));

router.get('/', (req, res) => {
    Job.find()
        .sort({createdAt: 1})
        .then((jobs) => res.json(jobs))
        .catch((err) => res.status(404).json({ nojobsfound: 'No jobs found.'}))
})

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const newJob = new Job({
            user: req.body.userId, // imported from session
            type: req.body.carType, //car type
            details: req.body.details,
            startAddress: req.body.startAddress,
            endAddress: req.body.endAddress,
            startLatLong: req.body.startLatLong, // array
            endLatLong: req.body.endLatLong, // array
            status: req.body.status, // not-started - default assignment 0
        })
        newJob.save().then((job) => res.json(job))
    }
)



router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { driver, status } = req.body;

    Job.findById(req.params.id).then((job) => {
      job.driver = driver;
      job.status = status;

      job
        .save()
        .then((savedJob) => res.json(savedJob))
        .catch((err) => res.json(err));
    });
    return res;
  }
);

router.delete('/:id', 
    passport.authenticate('jwt', {session: false}),
    (req, res, next) => {
        Job.findByIdAndRemove(req.params.id, req.body, function (err, job) {
        if (err) return next(err);
        res.json(job);
    });
    }
)


// module.exports = router;
//     passport.authenticate('jwt', {session: false}),
//     (req, res, next) => {
//         Job.findByIdAndRemove(req.params.id, req.body, function (err, job) {
//         if (err) return next(err);
//         res.json(job);
//     });
//     }



module.exports = router;
