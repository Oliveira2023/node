var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const { log } = require('console');

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
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write("<input type='file' name='filetoupload'><br>");
    res.write("<input type='submit'>");
    res.write("</form>");
    return res.end();
    }
}).listen(8080)