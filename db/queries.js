const {db} = require('./connection');

const getCharacter = async (req, res) => {
    console.log(req.params.name)
    // Note: name is full name with spaces and not what see in URI
    const query = await db.any(`select * from characters where name='${req.params.name}'`);
    res.status(200).json({results: query[0]});
}

module.exports = {getCharacter}