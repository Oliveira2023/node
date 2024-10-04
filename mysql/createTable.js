const con = require("./db_connection");
var mysql = require('mysql2');

//alterado a sql para outros casos diferente do nome do arquivo
let adr = 'Mountain 21';
const sql = `insert into users (name, favorite_product) values 
('John',154),
('Peter', 154),
('Amy', 155),
('Hannah',null),
('Michael',null)`;
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("users added");
});

con.end();
