const dotenv = require('dotenv');
dotenv.config();

const serverConfig = require('./server.config'); 
const dbConfig = require('./db.config');

module.exports = {serverConfig , dbConfig};

