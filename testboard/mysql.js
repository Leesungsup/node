var mysql = require('mysql');
var conn=mysql.createConnection({
    host     : 'localhost',
    port:3306,
    user     : 'song',
    password : 'ddaa19',
    database : 'nodejs'
  });
  module.exports = conn;