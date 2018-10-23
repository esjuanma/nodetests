const myModule = require('./myModule');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	fs.readFile('demofile1.html', 'utf8', (err, html) => {
		const content = `It's ${myModule.myDateTime()}`;

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(html.replace('{{content}}', content));
		res.end();
	});
}).listen(8080);

console.log('Ready! Go to localhost');
