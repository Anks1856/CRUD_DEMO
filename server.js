const express = require('express');
const app = express();
const cors = require('cors');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const router = require('./routes');


app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

const cooki_secret = process.env.COOKI_SECRET;
app.use(cookieParser(cooki_secret));

const multerUtility = require('./utility/imageUpload.utility')
const multer = require('multer');
const upload = multer({storage : multerUtility.storage} , multerUtility.fileFilter).single("profile_img");
const globalConfig = require('./config');


const port = globalConfig.serverConfig.port

// db register
const db = require('./models/index');


app.use(router);
// route register
router.use('/Api' , router);


app.post('/imageUpload' , (req, res) => {
    upload(req, res , (err) => {
        if(err){
            res.status(400).send("somthing went wrong!")
        }
    })
    res.status(200).send('image uploaded successfully');
})

app.listen(port , () => {
    console.log(`server is running on port ${port}....`);
})

