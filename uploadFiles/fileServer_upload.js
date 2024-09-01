var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error in parsing');
                return;
            }
            // console.log(files);
            
            var oldpath = files.filetoupload[0].filepath;
            console.log(oldpath);
            
            var newpath = 'c:/Users/lucia/OneDrive/Aprendizado/W3C/node/uploadFiles/' + files.filetoupload[0].originalFilename;
            console.log(newpath);
            
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            })
        })
    }else {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }  
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    }
}).listen(8080);