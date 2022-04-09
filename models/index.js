const mongoose = require('mongoose');

const globalConfig = require('../config')
const userModel = require('./user.model');

const host = globalConfig.dbConfig.host;
const port = globalConfig.dbConfig.port;
const dbName = globalConfig.dbConfig.dbName;

var db = {};
db.User = userModel;


mongoose.connect(`mongodb://${host}:${port}/${dbName}`).then(() => {
    console.log('Server is successfully connect with Database.');
}).catch(err => {
    console.log(err , 'Enable to connect with Database');
});

module.exports = db;