const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../../model/user');






async function handleLogin(req, res, next){
    const {email, password} = req.body;
    
      
   

    if(password.length < 8){
        return res.status(401).send({
            success: false, 
            error: "unauthorize"
        });
    }
    
    try{
        const existedUser = await getUserByEmail(email);
        if(existedUser){
            if(existedUser.password === password){
                const token = jwt.sign({
                    userId: existedUser.userId,
                    userName: existedUser.userName
                },'NAHIBATAUNGA',{expiresIn: 60*60});

                res.send({
                    success: true,
                    token: token

                });

            } else{
                return res.status(401).send({
                    success: false, 
                    error: "incorrect user name or password"
                });
            }
        } else{
            res.status(404).send({
                success: false,
                error: "incorrect user name or password"
            })
        }

    } catch(e){
        res.status(401).send({
            success: false,
            error : e.message
        });

    }
}

module.exports = handleLogin;