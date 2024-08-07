// Imports express
const express = require('express');

// Instatiaiton server configuration
const server = express();

// Congifure routes
server.get('/', (req, res) => {
    // header page
    res.setHeader('Content-Type', 'text/html');
    // body page
    res.status(200).send('<h1>Bienvenue sur mon server</h1>');
})

// Launch server
server.listen(8888, () => {
    console.log('Server started on port 8888');
    
})
