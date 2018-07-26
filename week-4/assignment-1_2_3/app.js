const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/getData', (req, res) => {
	const number = req.query.number;
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