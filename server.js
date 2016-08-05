'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const SocketIO = require('socket.io');
const request = require('request');

require('dotenv').load();


const API_KEY = process.env.API_KEY;
// import users from './routes/users';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


let _target;
io.on('connection', socket => {

	io.emit('updateCount', io.engine.clientsCount);

	socket.on('message', message => {

		let msgObj = {
			from: message.from,
			sentAt: message.sentAt,
			esMessage: '',
			enMessage: ''
		}

		request
		.get(`https://www.googleapis.com/language/translate/v2?key=${API_KEY}&target=es&q=${message.message}`, (error, response, body) => {
			let newBody = JSON.parse(body);
			msgObj.esMessage = newBody.data.translations[0].translatedText;
			request
			.get(`https://www.googleapis.com/language/translate/v2?key=${API_KEY}&target=en&q=${message.message}`, (error, response, body) => {
				let newBody = JSON.parse(body);
				msgObj.enMessage = newBody.data.translations[0].translatedText;
				socket.broadcast.emit('message', msgObj);
			})
		})

	})

	socket.on('disconnect', socket => {
		io.emit('updateCount', io.engine.clientsCount);
	})
})

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './public/index.html'));
});

// app.use('/users', users);

server.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
