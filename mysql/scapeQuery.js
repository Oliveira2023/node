const con = require("./db_connection");
const mysql = require('mysql2');

let name = 'Amy';
let adr = 'Mountain 21';
const sql = "select * from customers where name = ? or address = ?";
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);

con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});

con.end();