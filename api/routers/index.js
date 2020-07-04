//  /api

const express = require('express');
const router = express.Router();
const AddRouter = require('./AddRouter');
const SubRouter = require('./SubRouter');
const UserRouter = require('./UserRouter');

router.get('/', (req, res) => {
    res.status(200).json({ welcome: 'API Math Router'})
});

router.use('/addproblems', AddRouter); // /api/addproblems
router.use('/subproblems', SubRouter); // /api/subproblems

router.use('/user', UserRouter) //  /api/user

module.exports = router;