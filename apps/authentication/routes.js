var sys = require('sys');

var routes = function(app) {
	
	app.param('pageId', function(req, res, next) {
		var id = req.params.pageId;
		id = parseInt(id)*5;
		req.pageId = id.toString();
		next();
	});
	
	app.get('/s',  function(req, res) {
		console.log('--------------------------- ' + req.u);
		res.render(__dirname + "/test.jade",{
			name: 'az7ar'
		, title: 'testing context'
		});
	});
	
	app.post('/s', function(req, res) {
		console.log(req.body);
		sys.log(req.body);
	});
	
	app.get('/page/:pageId', function(req, res) {
		console.log('--------pageId------' + req.pageId);
		res.writeHead(200,{
			'Content-Type': 'text/plain'
		});
		
		res.end(req.pageId);
	});
};


module.exports = routes;