const { newComments } = require("../../../model/comment");









async function newComment (req, res, next){

    const userName = req.userName;

    
    
    const {postId , comments} =req.body;

    

    
    
    

    try{
        const result =  await newComments(postId, userName, comments) ;
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



module.exports = newComment;
