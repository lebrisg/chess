//  OpenShift sample Node application
var http  = require('http');
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(__dirname + "index.html");
}).listen(port);

console.log('Server running on http://%s:%s', ip, port);
