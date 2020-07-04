//  /api/subproblems

const express = require('express');
const router = express();
router.use(express.json());
const checkAuth = require('../../auth/check_auth');

const SubProblems = require('../models/SubModel');

// api key required to view objects
router.get('/view', (req, res) => {
    const par_api_key = req.query.api_key;
    SubProblems.get(par_api_key)
        .then(obj => {
            res.status(200).json(obj)
        })
        .catch(err => {
            res.status(500).json({ message: 'unable to retrieve math problems'})
        })
});

// api key required to view objects
router.get('/random', (req, res) => {
    const par_api_key = req.query.api_key;
    AddProblems.get(par_api_key)
        .then(obj => {
            // console.log("count: ", typeof(obj.length))
            let ranEl = Math.round(Math.random() * obj.length) - 1;
            console.log("random el val: ", ranEl);
            res.status(200).json(obj[ranEl])
        })
        .catch(err => {
            res.status(500).json({ message: 'unable to retrieve math problems'})
        })
});

// protected
router.post('/sub', checkAuth, (req, res) => {
    const data = req.body;
    SubProblems.add(data)
        .then (subProb => {
            res.status(200).json(subProb);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create a new add problem ...' })
        })
})

module.exports = router;