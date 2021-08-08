const { viewAllLIkesOnPost } = require("../../../model/like");









async function viewLikes(req, res, next){

    

    
    
    const {postId} =req.body;

    

    
    
    

    try{
        const userNames =  await viewAllLIkesOnPost ( postId) ;
        res.send(userNames);
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,
            error: e.message
        });
    }
}



module.exports = viewLikes;
