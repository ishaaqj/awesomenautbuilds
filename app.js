const express = require('express');
const app = express();
const path = require('path');
const query = require('./db/queries');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');

app.use(morganLogger('dev'));
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '/dist/')));

app.get('/dbcharacter/:name', query.getCharacter);

app.get('/*', (req, res) => {
    console.log(path.join(__dirname, '/dist/') + 'index.html');
    res.sendFile(path.join(__dirname, '/dist/') + 'index.html');
} )

module.exports = app;




