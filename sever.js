var http=require('http');
http.createServer(function(req,res){
    res   .writeHead(200,{'Content-Type':'text/html'});
    res.write('<h2>JavaScript executed using Node.js server</h2>');
    res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');