import React from 'react';
import io from 'socket.io-client';
import moment from 'moment';

import DisplayMessage from './DisplayMessage';
import DisplayUser from './DisplayUser';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			socket: io()
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentDidMount() {
		// this.socket = io();
		this.state.socket.on('message', message => {
			console.log('message', message);
			this.setState({ messages: [message, ...this.state.messages] });
		})
	}

	handleSubmit(event) {
		const newMessage = event.target.value;
		if(event.keyCode === 13 && newMessage) {
			const message = {
				message: newMessage,
				from: this.props.userNameData.userName,
				preferedLanguage: this.props.userNameData.language,
				sentAt: moment().format('LT')
			}
			this.setState({ messages: [message, ...this.state.messages] });
			this.state.socket.emit('message', message);
			event.target.value = '';
		}
	}

	render() {
		console.log('this.state.messages', this.state.messages);
		return (
			<div className="container" style={styles.container}>

				<DisplayUser userData={this.props.userNameData} socket={this.state.socket}/>

				<DisplayMessage messages={this.state.messages} userData={this.props.userNameData}/>

					<nav className="navbar navbar-fixed-bottom navbar-light" style={styles.navbar}>
						<input
							className="col-md-8 col-xs-8 col-sm-8"
							type="text"
							placeholder="Enter a message.."
							onKeyUp={this.handleSubmit}
							style={styles.textBox}
							/>

						<button className="btn btn-success-outline btn-lg">
							Send
						</button>
					</nav>


		</div>
		)
	}
}

const styles = {
	navbar: {
		background: '#fff'
	},
	sendMessage: {
		bottom: 20,
		position: 'fixed',
		width: '100%'
	},
	textBox: {
		height: 50,
		marginRight: 10
	},
	from: {
		color: 'green'
	},
	message: {
		color: 'red',
		marginLeft: 10
	}
}
