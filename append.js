const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!\n', (err) => {
	if (err) throw err;
	console.log('Saved!');
});