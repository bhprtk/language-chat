import React from 'react';
import io from 'socket.io-client';
import moment from 'moment';

import DisplayMessage from './DisplayMessage';
import DisplayUser from './DisplayUser';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		let msgObj = {
			from: 'bot',
			sentAt:moment().format('LT'),
			enMessage: 'Welcome to Inter Language Chat app. To talk to other online users, type a message in your language.',
			esMessage: 'Bienvenido a Inter Idioma chat aplicación. Para hablar con otros usuarios, escriba un mensaje en su idioma.'
		}

		this.state = {
			messages: [msgObj],
			socket: io(),
			newMessage: ''
		}
		this.newMessage = this.newMessage.bind(this);

	}

	componentDidMount() {
		this.state.socket.on('message', message => {
			this.setState({ messages: [...this.state.messages, message] });
		})
	}

	newMessage(e) {
		e.preventDefault();
		const message = {
			message: this.state.newMessage,
			from: this.props.userNameData.userName,
			preferedLanguage: this.props.userNameData.language,
			sentAt: moment().format('LT')
		}
		this.setState({ messages: [...this.state.messages, message] });
		this.state.socket.emit('message', message);
		this.setState({newMessage: ''})
	}

	render() {
		return (
			<div className="container" style={styles.container}>

				<DisplayUser userData={this.props.userNameData} socket={this.state.socket}/>

				<DisplayMessage messages={this.state.messages} userData={this.props.userNameData}/>

					<nav className="navbar navbar-fixed-bottom navbar-light" style={styles.navbar}>

							<form onSubmit={this.newMessage}>

								<h1>
									<input
										className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1"
										type="text"
										placeholder="Enter a message.."
										onChange={e => this.setState({newMessage: e.target.value})}
										value={this.state.newMessage}
										style={styles.textBox}
										onFocus={() => console.log('fucous')}
										/>

								</h1>
{/*
								<button className="btn btn-success-outline btn-lg">
									Send
								</button>*/}

							</form>

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
		height: 100,
		marginRight: 10,
		color: '#696969'
	},
	from: {
		color: 'green'
	},
	message: {
		color: 'red',
		marginLeft: 10
	}
}
