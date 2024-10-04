const con = require("./db_connection");

const sql = "insert into customers (name, address) values ('Michelle', 'Blue Village 123')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
})

con.end();