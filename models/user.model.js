const  {Schema, model } = require('mongoose');

const userSchema = Schema({
    name : {
        type : String, required:true 
    },
    email : {
        type : String, required : true , unique: true
    } ,
    contactNo : {
        type : Number , minLength:10, maxLength:12, required : true
    },
    password : {
        type : String, minLength: 6 , required:true
    },
    role : {
        type : String , 
    },
    image : {
        type : String , require: true
    },
    isActive : Boolean
});

const User = new model("User", userSchema);

module.exports = User;

