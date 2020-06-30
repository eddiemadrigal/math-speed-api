// /api/user
require('dotenv').config();
const express = require('express');
const router = express();
router.use(express.json());

const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    return res.status(200).json({ message: 'user router ok'})
})

router.post('/finduser', (req, res) => {
    const email = req.body;
    User.getUser(email)
        .then(obj => {
            res.status(200).json(obj)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.post('/signup', (req, res, next) => {  //  /api/user/signup
    User.getUser(req.body)
        .then (user => {
            if (user) {
                return res.status(409).json({
                    message: 'Duplicate email address exists'
                })
            } else {
                const API_key = generateAPI_key();
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        User.addUser({
                            email: req.body.email,
                            password: hash,
                            api_key: API_key
                        })
                            .then(user => {
                                res.status(201).json(user)
                            })
                            .catch(err => {
                                res.status(500).json({ message: 'Failed to create a new user'})
                            })
                    }
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        })
})

router.post('/login', (req, res) => {
    User.getUser(req.body)
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            } 
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).json({
                        message: 'Auth successful',
                        token
                    })
                }
                res.status(401).json({
                    message: 'Auth failed'
                })
            })
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            })
        })
})

function generateAPI_key() { 
    var d = new Date().getTime(); 
    return 'xxxxxxxx-xxxx-1999-e&emxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c) { 
        let r = Math.random() * 16; 
        r = (d + r)%16 | 0;  
        return (r.toString(16)); 
    });
}

module.exports = router;