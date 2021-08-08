const { viewPostbyUserid } = require("../../model/post");






async function viewAllPostsByUserid (req, res, next) {

    const userName = req.userName;
    const userId = req.userId;
   
    try{
        const result = await viewPostbyUserid( userId);
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



module.exports = viewAllPostsByUserid;