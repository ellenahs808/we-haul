const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Job = require('../../models/Job')
const jwt = require('jsonwebtoken');
const validateJobInput = require('../../validations/jobs');

const geocodeUtil = require('../../util/geocode_util');


// router.get("/test", (req, res) => res.json({ msg: "This is the jobs route" }));

router.get('/', (req, res) => {
    Job.find()
        .sort({createdAt: -1})
        .then((jobs) => res.json(jobs))
        .catch((err) => res.status(404).json({ nojobsfound: 'No jobs found.'}))
})

router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Job.find({user: req.params.user_id})
      .then(((jobs) => res.json(jobs)))
      .catch((err) => res.status(404).json({nojobfound: 'No jobs found from that user'}))
})



router.post('/', 
    passport.authenticate('jwt', { session: false }),
    
    (req, res) => {

        const { errors, isValid } = validateJobInput(req.body);
    
            if (!isValid) {
                return res.status(400).json(errors);
            }
   
        geocodeUtil
          .parseAddress(req.body.startAddress, req.body.endAddress)
            .then((gMapsResponse) => {
                const newJob = new Job({
                  type: req.body.type,
                  details: req.body.details,
                  startAddress: gMapsResponse.data.routes[0].legs[0].start_address,
                  endAddress: gMapsResponse.data.routes[0].legs[0].end_address,
                  user: req.user.id,
                  status: req.body.status,
                  //         startLatLong: req.body.startLatLong, // array
                  //       endLatLong: req.body.endLatLong, // array
                  //     status: req.body.status, // not-started - default assignment 0
                });
            newJob.save()
            .then((job) => res.json(job))
            .catch((err) => res.json(err))
          })
          return res;
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

      job.save()
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
