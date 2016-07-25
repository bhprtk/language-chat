import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import SocketIO from 'socket.io';



// import users from './routes/users';

let PORT = process.env.PORT || 3000;

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);





app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


// app.use('/users', users);

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});
