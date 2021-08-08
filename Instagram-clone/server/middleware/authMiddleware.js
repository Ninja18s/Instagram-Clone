const jwt = require('jsonwebtoken');


function authMiddleware(req, res, next){

    const token = req.headers['authorization'];
               
         
    if(!token) return res.status(401).send("token missing");

    try{
        const decoded = jwt.verify(token,'NAHIBATAUNGA');
        const userId = decoded.userId;
        const userName = decoded.userName;
        
           req.userId = userId;
           req.userName = userName;
           next(); 
         
        
    } catch(e){
        res.status(401).send ("unauthorized");
    }
}

module.exports = authMiddleware;