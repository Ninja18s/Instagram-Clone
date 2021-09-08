const randomString = require('randomstring');
const fs = require('fs');
const { createNewPost } = require('../../model/post');












async function newPost(req, res, next){


    
    const {caption} = req.body;
    const userName = req.userName;
    const userId = req.userId;
    
    const imageName = userName.concat(Date.now())+".jpg";
    const target_path = './uploads/images/'+userName+'/'+imageName;
    
    
    
    
    const data = req.file.buffer;
    


  
    
    
    const rand1 = randomString.generate(7);
    const rand2 = userName.slice(0,4);
    const postId = rand2+rand1;
    
    
    
    
    
    try{
        fs.writeFileSync(target_path,data, {encoding: 'utf8' });
        const uploadPost =  await createNewPost(postId, userId, userName, imageName, caption) ;
        res.send({
            
            
            msg : postId
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
