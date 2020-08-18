const express = require('express');
const app = express();
const path = require('path');




app.get('/', (req, res) => {
    res.send(path.join(__dirname, '/dist/') + 'index.html');
} )

module.exports = app;




