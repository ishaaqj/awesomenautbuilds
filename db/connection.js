const pgpromise = require('pg-promise');
const config = require('../dbconfig.json');


const url = `postgres://${config.username}:${config.password}@localhost:5432/awesomenauts`

const db = pgpromise(url);

module.exports = {db}