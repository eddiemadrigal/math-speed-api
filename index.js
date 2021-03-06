require('dotenv').config();
const express = require('express');
const server = express();
var cors = require('cors')
const apiRouter = require('./api/routers');
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({ message: "API is up ..." })
});

server.use('/api', apiRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running on port ${port}...\n`)
});