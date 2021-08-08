const { deleteComment } = require("../../../model/comment");









async function deleteCommentOnPost(req, res, next){

    const userName = req.userName;

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const like =  await deleteComment ( postId, userName) ;
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



module.exports = deleteCommentOnPost;
