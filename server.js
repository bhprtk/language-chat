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
const server = http.Server(app);
const io = new SocketIO(server);





app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

io.on('connection', socket => {
	socket.on('message', body => {
		console.log('body', body);

		request
			.get(`https://www.googleapis.com/language/translate/v2?key=${API_KEY}&target=hi&q=${body}`, (error, response, body) => {
				let newBody = JSON.parse(body);
				// console.log('newBody.data.translations[0].translatedText', newBody.data.translations[0].translatedText);
				console.log('body', body);
				socket.broadcast.emit('message', {
					body: newBody.data.translations[0].translatedText,
					from: socket.id.slice(8)
				})
			})

	})
})

// app.use('/users', users);

server.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
