// /db/db_service.js
const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    user: 'root',
    host: 'localhost',
    database: 'webdev',
    password: '',
    port: 3306,
});

const query = function(text, params){
    return pool.promise().query(text, params);
}
module.exports = {
    query
};
