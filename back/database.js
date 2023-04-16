const mysql = require('mysql2');
const dbconnection = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"root",
    database:"hospital_login"
}).promise()

module.exports = dbconnection;