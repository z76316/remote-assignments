const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.send('Hello, My Server!');
})

app.listen(3000);