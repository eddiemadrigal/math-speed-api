//  /api/addproblems

const express = require('express');
const router = express();
router.use(express.json());
const checkAuth = require('../../auth/check_auth');

const AddProblems = require('../models/AddModel');

// api key required to view objects
router.get('/view', (req, res) => {
    const par_api_key = req.query.api_key;
    AddProblems.get(par_api_key)
        .then(obj => {
            res.status(200).json(obj)
        })
        .catch(err => {
            res.status(500).json({ message: 'unable to retrieve math problems'})
        })
});

// protected
router.post('/add', checkAuth, (req, res) => {
    const data = req.body;
    AddProblems.add(data)
        .then (addProb => {
            res.status(200).json(addProb);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create a new add problem ...' })
        })
})

module.exports = router;