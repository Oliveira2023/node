
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("create database node_createDB2", function (err, result) {
        if (err) throw err;
        console.log("database created");
    });
});