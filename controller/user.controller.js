const db = require('../models/index');



const getAll = async (req, res) => {
    try{
         const users = await db.User.find();
         res.status(200).send(users);
    }
    catch(err) {
        console.log(err);   
        res.status(500).send('Internal Server Error!');
    }
}

const updateUser = async (req, res) => {
    try{
        const {id} = req.params; 
        const update = req.body; 
        const user = await db.User.findOneAndUpdate({_id : id}, update ,{new : true})
        res.status(200).send({message : "record updated successfully"  , data:user});
    }
    catch(err) {
        console.log(err);   
        res.status(500).send('Internal Server Error!');
    }
}

const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await db.User.findByIdAndDelete({_id : id} , {new :true});
        res.status(200).send({message : "record deleted successfully" , data : user})
    }
    catch(err) {
        console.log(err);   
        res.status(500).send('Internal Server Error!');
    }
}


module.exports = {getAll, updateUser, deleteUser}