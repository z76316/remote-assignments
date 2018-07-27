const express = require('express');
const bodyParser = require('body-parser');
var serveStatic = require('serve-static');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('./'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/getData', (req, res) => {
	let number = req.query.number;
	// console.dir(number);
	if (number) {
		// total 1 + .... + number
		var total = 0;
		for (let i = 1; i <= number; i++)
		{
			total += i;
		}
		res.render('getData', { total });
	} else {
		res.render('getData');
	}
});

app.post('/getData', (req, res) => {
	let number = req.body.number;
	// console.dir(number);
	if (number) {
		// total 1 + .... + number
		var total = 0;
		for (let i = 1; i <= number; i++)
		{
			total += i;
		}
		res.render('getData', { total });
	} else {
		res.render('getData');
	}
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!');
});