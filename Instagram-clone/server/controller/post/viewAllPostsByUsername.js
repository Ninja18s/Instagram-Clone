const fs = require('fs');
const { viewPostbyUsername } = require("../../model/post");






async function viewAllPostsByUsername (req, res, next) {

    const userName = req.userName;
    const targetPath = './uploads/images/'+userName;
   
    try{
        const result = JSON.parse(JSON.stringify(await viewPostbyUsername(userName))) ;
        for( let i=0; i< result.length ; i++){

            fs.readFileSync(targetPath+'/'+result[i].imageName, {encoding: 'utf8'});
            console.log(result[i].imageName);
        }
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