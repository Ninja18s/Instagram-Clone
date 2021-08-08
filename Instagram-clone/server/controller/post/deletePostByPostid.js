const { deletePost } = require("../../model/post");






async function deletePostByPostId (req, res, next) {

    const userName = req.userName;
    const postId = req.postId;
   
    try{
        const result = await deletePost( postId);
          res.send ({
            success: true
            
          })

    } catch(e){
        res.status(500).send({
            success: false,
            error: e.message
        });
    }

}



module.exports = viewAllPostsByUsername;