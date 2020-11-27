const express = require('express');
const app = express();
const path = require('path');


app.use('/', express.static(path.join(__dirname, '/dist/')));

app.get('/*', (req, res) => {
    console.log(path.join(__dirname, '/dist/') + 'index.html');
    res.sendFile(path.join(__dirname, '/dist/') + 'index.html');
} )

module.exports = app;




