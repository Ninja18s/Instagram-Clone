const {  viewTotalLikeONPost } = require("../../../model/like");








async function viewTotalLikes(req, res, next){

    

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const result = await viewTotalLikeONPost ( postId)
        res.send(result);
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,
            error: e.message
        });
    }
}



module.exports = viewTotalLikes;
