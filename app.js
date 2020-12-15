const express = require('express');
const app = express();
const path = require('path');
const query = require('./db/queries');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');

app.use(morganLogger('dev'));
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '/dist/')));



// These are the routes the components use
app.get('/dbcharacter/:id', query.getCharacter);
app.get('/dbcharacterCount', query.getCharacterCount);
app.get('/dbPost/:id/:username/:simplified', query.getPosts);


// This is the default route for any request
app.get('/*', (req, res) => {
    console.log(path.join(__dirname, '/dist/') + 'index.html');
    res.sendFile(path.join(__dirname, '/dist/') + 'index.html');
} )

module.exports = app;




