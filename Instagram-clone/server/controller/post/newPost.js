const randomString = require('randomstring');
const fs = require('fs');
const { createNewPost } = require('../../model/post');
const path = require('path');
const up = require('express-fileupload');







async function newPost(req, res, next){

    const userName = req.userName;
    const userId = req.userId;
    
    const {caption} =req.body;
     const files = req.files.image;
    const rand1 = randomString.generate(7);
    const rand2 = userName.slice(0,4);
    const postId = rand2+rand1;

    console.log(caption);
    const imageName = userName.concat(Date.now())+".jpg";
    

    

    // fs.readFileSync(path.join(__dirname,"/upload/image/"+userName+"/"),files);
   
   const fv =files.mv(__dirname,'/'+userName,imageName, function(err){
       if(err){
           res.send(err);
       }
   })
   console.log(fv);
   
   console.log(path.join(__dirname,"../../uploads/images/"+userName));
    try{
       // const uploadPost =  await createNewPost(postId, userId, userName, imageName, caption) ;
        res.send({
            
            ...req.body
        });
    } catch(e){
        console.log(e);
        res.status(500).send({
            success: false,    
            error: e.message
        });
    }
}



module.exports = newPost;
