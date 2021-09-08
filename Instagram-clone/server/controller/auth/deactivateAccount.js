const { throws } = require('assert');
const fs = require('fs');

const {  deleteUser } = require("../../model/user");




async function deactivateAccount (req, res, next) {
    const{ password} = req.body;
    const userName = req.userName;

    
    console.log(userName, password);
    
    if(password.length < 8){
        return res.status(401).send({
            success: false, 
            error: "unauthorize"
        });
    }

    const targetPath = './uploads/images/'+userName;

    try{

        const result = await deleteUser (userName , password);

        if(result){
            fs.rmdir (targetPath,{ recursive: true }, (err)=>{
                if(err){
                    
                    console.log(err);
                }
            });
            res.send({
                msg: "Account Permanantly Deleted"
            });
        }

       
    } catch(e){
        res.status(500).send({
            msg: "Incorrect Password",

            error: e.message
        });
    }




}


module.exports = deactivateAccount;