const db = require('../models/index');
const bcrypt = require('bcrypt');
const JWTUtil = require('../utility/auth.utility');

const register = async(req, res) => {
    console.log(req.body);
    try{
        if(req.body){
            const hasUser = await db.User.findOne({email : req.body.email});
            if(hasUser){
                res.status(401).send('Email already exist!');
            }
            else {
                console.log(req.body)
                    const newUSer = {
                        name : req.body?.name,
                        email : req.body?.email,
                        contactNo : req.body?.contactNo,
                        password : req.body.password ? bcrypt.hashSync(req.body.password, 8) : null,
                        role : 'user',
                        image : req.body.image
                    }
                    const user = new db.User(newUSer);
                    await user.save();
                    res.status(200).send('User successfully register.')
            }    
        }
        
    } 
    catch(err ) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }
}

const login = async(req, res) => {
    try{
        if(req.body){
            const hasUser = await db.User.findOne({email : req.body.email});
            if(!hasUser){
                res.status(401).send('User not exist');
            }
            else {
                if(!bcrypt.compareSync(req.body?.password ,hasUser.password)){
                    res.status(401).send('Email or password is Wrong!');
                }
                else {
                    const payload = {
                        username : hasUser.username,
                        email : hasUser.email
                    }
                    const token = JWTUtil.createToken(payload);
                    res.cookie('tokenKey' , token);
                    res.status(200).send({token : token } )
                }
            }
        }
    }
    catch(err) {
        console.log(err);   
        res.status(500).send('Internal Server Error!');
    }
}




module.exports = {register, login}