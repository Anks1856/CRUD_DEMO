const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

const dbConfig = {
    host : host,
    port : port,
    dbName : dbName
}

module.exports = dbConfig;