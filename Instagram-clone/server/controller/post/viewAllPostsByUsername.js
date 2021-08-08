const { viewPostbyUsername } = require("../../model/post");





async function viewAllPostsByUsername (req, res, next) {

    const userName = req.userName;
   
    try{
        const result = await viewPostbyUsername(userName);
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