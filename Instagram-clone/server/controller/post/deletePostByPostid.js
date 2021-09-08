const fs = require('fs');
const { deletePost, getImageName } = require("../../model/post");







async function deletePostByPostId (req, res, next) {




    const userName = req.userName;
    const {postId} = req.body;
   console.log(postId);
    try{
        const imageName = await getImageName( postId);
        if(imageName){
            console.log(imageName);
            const filePath = './uploads/images/'+userName+'/'+imageName;
            
            fs.unlink(filePath, function(err){throw err
            console.log(err);});
            const result = await deletePost( postId);
              res.send ({
                success: true
                
              })
        } else{
            res.status(404).send({
                success: false,
                msg :'file not found'
            })
        }

    } catch(e){
        res.status(500).send({
            success: false,
            error: e.message
        });
    }

}



module.exports = deletePostByPostId;