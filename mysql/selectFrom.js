const con = require("./db_connection");

const sql = "select name, address from customers where address like 'S%'";

con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

con.end();