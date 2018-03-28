//  OpenShift sample Node application
var http  = require('http'),
	fs = require('fs');
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

http.createServer(function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		if(err){
			res.writeHead(500, { 'Content-Type': 'text/html' });
			res.end('<html>500 - Internal Error</html>');
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(data);
		}
	});
}).listen(port);

console.log('Server running on http://%s:%s', ip, port);
