const express = require('express');
const cors = require('cors');

const dalUser = require('./DAL');

const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    console.log('get called!');
    setTimeout(() => res.send('Yeah, got it!'), 10000);
});

server.post('/user', (req, res) => {
    console.log(req.body);
    dalUser.saveUser(req.body);
    res.send('user saved!');
})

server.listen(3001, ()=> {
    console.log('listening on port 3001')
});