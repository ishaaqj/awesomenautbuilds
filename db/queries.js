const {db} = require('./connection');

const getCharacter = async (req, res) => {
    // this console log for logging purposes/debugging
    console.log(req.params.name)
    // Note: name is full name with spaces and not what see in URI
    try{
        const query = await db.any(`select * from characters where id='${req.params.id}';`);
        res.status(200).json({results: query[0]});
    }catch(err){
        console.log(`error in getCharacter`);
        console.log(err)
    }
    res.status(300);
}

const getCharacterCount = async (req, res) =>{
    try{
        const query = await db.one('select max(id) from characters;');
        res.status(200).json({maxCount: query})
        console.log(query);
    }catch(err){
        console.log('error in getting character count', err);
    }

}

module.exports = {getCharacter, getCharacterCount}