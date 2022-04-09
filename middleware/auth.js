const jwt = require('jsonwebtoken');
const token_secret = process.env.TOKEN_SECRET;
const db = require('../models');

const isAuth = async (req, res, next) => {
    console.log("hello");
    try {
        const {tokenKey:token} = req.cookies; 
        console.log(token);
        if(token){
            const decode = jwt.verify(token, token_secret);
            const user = await db.User.findOne({email : decode.email});
            if(!user){
                res.status(403).send("Please login again!");
            }
            next();
        }
        else {
            res.status(401).send("token not provided!");
        }

    }
    catch(err){
        // console.log(err);
        if(err.name == "TokenExpiredError"){
            res.status(403).send("Token is expired!");
        }
        else{
            res.status(500).send("Internal Server Error!");
        }
    }
}

module.exports = {isAuth};