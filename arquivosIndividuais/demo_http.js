var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080