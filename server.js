import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import SocketIO from 'socket.io';
import request from 'request';

import dotenv from 'dotenv';
dotenv.load();

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


// app.use('/users', users);

server.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
