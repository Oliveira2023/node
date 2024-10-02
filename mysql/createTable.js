const con = require("./db_connection");

var sql = "CREATE TABLE customers1 (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

con.end();
