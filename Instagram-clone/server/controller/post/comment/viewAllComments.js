const { viewComment } = require("../../../model/comment");









async function viewAllCommentsOnPost(req, res, next){

    

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const result = viewComment( postId);
        res.send({
            success: true,
            comments : result
        });
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,
            error: e.message
        });
    }
}



module.exports = viewAllCommentsOnPost;
