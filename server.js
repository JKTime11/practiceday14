const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    console.log('get called!');
    setTimeout(() => res.send('Yeah, got it!'), 10000);
});

server.listen(3001, ()=> {
    console.log('listening on port 3001')
});
console.log('1');