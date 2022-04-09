const multer = require('multer');
const path = require('path');


var storage = multer.diskStorage({  
    destination: function(req, file, cb) { 
       cb(null, 'uploads/assets/img/');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

 const fileFilter =  (req, file, cb) => {    
    const filetypes = /jpeg|jpg|png|gif/;
 
   const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
   const mimetype = filetypes.test(file.mimetype);
 
  if(mimetype && extname){
      return cb(null,true);
  } else {
      cb('Images Only allowed!');
  }
 }  



module.exports = {fileFilter , storage};