const { viewTotalComments } = require("../../../model/comment");








async function  viewTotalCommentsOnPost(req, res, next){

    

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const like =  await  viewTotalComments ( postId, userName) ;
        res.send(result);
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,
            error: e.message
        });
    }
}



module.exports = viewTotalCommentsOnPost;
