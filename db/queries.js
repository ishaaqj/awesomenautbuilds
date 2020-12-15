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

const getPosts = async (req, res) => {
    try{
        let query;
        switch(req.params.simplified){
            case 'fullpost':
                query = await db.any(`select * from posts where id = ${req.params.id} and username = '${req.params.username}'`);
                break;
            case 'simplepost':
                query = await db.any(`select id, title, upvote, cost, instructions from posts where id = ${req.params.id} and username = '${req.params.username}'`);
                break;
            default:
                query = [{result: 'simpified parameter not specified'}]
        }


        res.status(200).json({posts: query[0]})
    }catch(err){
        console.log('error in getting posts', err);
    }
}

module.exports = {getCharacter, getCharacterCount, getPosts}