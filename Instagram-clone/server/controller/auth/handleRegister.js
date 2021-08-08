const randomString = require('randomstring');
const fs = require('fs');
const isEmail = require('isemail');
const { getUserByEmail, getUserByUsername, createNewUser } = require('../../model/user');

async function handleRegister(req, res, next){

    

    const {name, userName, email, password, DOB} = req.body;

    const rand1 = randomString.generate(7);
    const rand2 = email.slice(0,4);
    const userId = rand2.concat(rand1);


    
    const existEmail = await getUserByEmail(email);
    const existUsername = await getUserByUsername( userName);

    
    if(existEmail){
        return res.status(401).send({
            success: false,
            error: "email already exist"
        });
    }
    if(existUsername){
        return res.status(401).send({
            success: false,
            error: "user name already exist"
        });
    }
    if(!isEmail.validate(email)){
        return res.status(400).send({
            success: false,
            error:"Invalid Email"
        });
    }
    if(name.length < 3){
        return res.status(400).send({
            success: false, 
            error: "name should be 3 chars long"
        });
    }
    if(userName.length < 3){
        return res.status(400).send({
            success: false, 
            error: "name should be 3 chars long"
        });
    }
    if(password.length < 8){
        return res.status(400).send({
            success: false, 
            error: "password should be 8 chars long"
        });
    }
    try{
        const result = await createNewUser (userId, name, userName, email, password, DOB);
        if(result){
            res.send({
                success: true
            });


            fs.mkdir("./uploads/images/"+userName,{ recursive: true }, function(err) {
                   if (err) {
                     console.log(err)
                   } else {
                     console.log("New directory successfully created.")
                   }
                 })
            
        } else{
            res.status(500).send({
                success : false,
                error: "something went wrong" 
            })
        }



    } catch(e){
        let msg = e.message;
        if (e.code === 'ER_DUP_ENTRY'){
            msg ="Email id already exist."
        }
        res.status(500).send({
            success : false,
            error: msg
        });

    }
    
}

module.exports = handleRegister;