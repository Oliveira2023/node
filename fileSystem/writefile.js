var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'New content! This is my new file', function (err) {
    if (err) throw err;
    console.log('Replaced!');
})