const express = require('express');
const router = express();
router.use(express.json());
const checkAuth = require('../../auth/check_auth');

const AddProblems = require('../models/AddModel');

// unprotected
router.get('/', (req, res) => {
    AddProblems.get()
        .then(obj => {
            res.status(200).json(obj)
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