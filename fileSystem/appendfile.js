var fs = require('fs');
fs.appendFile('mynewfile1.txt', '\nThis is a new text', function (err) {
    if (err) throw err;
    console.log('Updated!');
})