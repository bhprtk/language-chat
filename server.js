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

// 'https://www.googleapis.com/customsearch/v1?key= AIzaSyAcAf8p4Oh_4bBRhm3mkW80nrhmlzZj1Nk&cx=017576662512468239146:omuauf_lfve&q=lectures'
// ''


io.on('connection', socket => {
	io.emit('updateCount', io.engine.clientsCount);


	socket.on('message', message => {

		console.log('message', message);
		let _target;
		if(message.preferedLanguage === 'en') {
			_target = 'es';
		} else if(message.preferedLanguage === 'es') {
			_target = 'en';
		}

		request
			.get(`https://www.googleapis.com/language/translate/v2?key=${API_KEY}&target=${_target}&q=${message.message}`, (error, response, body) => {
				let newBody = JSON.parse(body);
				console.log('newBody.data.translations[0].translatedText', newBody.data.translations[0].translatedText);
				console.log('body', body);
				socket.broadcast.emit('message', {
					message: newBody.data.translations[0].translatedText,
					from: message.from
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
