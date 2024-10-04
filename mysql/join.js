const con = require("./db_connection");

const sql = "select users.name as user, products.name as favorite from users join products on users.favorite_product = products.id";

con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

con.end();
