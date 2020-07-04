//  /api/subproblems

const express = require('express');
const router = express();
router.use(express.json());
const checkAuth = require('../../auth/check_auth');

const DivProblems = require('../models/DivModel');

// api key required to view objects
router.get('/view', (req, res) => {
    const par_api_key = req.query.api_key;
    DivProblems.get(par_api_key)
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
    DivProblems.get(par_api_key)
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
router.post('/divide', checkAuth, (req, res) => {
    const data = req.body;
    DivProblems.add(data)
        .then (subProb => {
            res.status(200).json(subProb);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create a new division problem ...' })
        })
})

module.exports = router;