const { hitNewLike } = require("../../../model/like");








async function hitLike(req, res, next){

    const userName = req.userName;

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const like =  await hitNewLike( postId, userName) ;
        res.send({
            
            success: true
        });
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,
            error: e.message
        });
    }
}



module.exports = hitLike;
