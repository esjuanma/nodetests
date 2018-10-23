// Native
const http = require('http');
const fs = require('fs');

// Third party
var url = require('url');

// Custom
const myModule = require('./myModule');
// const helpers = require('./helpers');

http.createServer((req, res) => {
	console.log('req.url', req.url);
	const content = `It's ${myModule.myDateTime()}`;
	res.writeHead(200, { 'Content-Type': 'text/html' });
	
	fs.readFile('demofile1.html', 'utf8', (err, html) => {
		res.write(html.replace('{{content}}', content));
		res.end();

		const query = url.parse(req.url, true);
		console.log('query', query);
		
		const r = {};
		for(const key in req) {
			if(typeof req[key] !== 'object' || req[key] instanceof Array) {
				r[key] = req[key];
			}
		}

		fs.writeFile('json.txt', JSON.stringify(r), function (err) {
			if (err) throw err;
			console.log('- request saved');
		});
	});
}).listen(8080);

console.log('Ready! Go to localhost');
