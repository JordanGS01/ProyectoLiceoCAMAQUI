const { Client } = require('pg');
const {db} = require('./config');

const client = new Client({
    host: db.host,
    user: db.user,
    port: db.port,
    password: db.password,
    database: db.database
})

module.exports = client;