import React from 'react';
import io from 'socket.io-client';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentDidMount() {
		this.socket = io('/');
		this.socket.on('message', message => {
			console.log('message', message);
			// let newMessage = JSON.parse(message.body);
			// console.log('newMessage', newMessage.data.translations[0].translatedText);
			this.setState({ messages: [message, ...this.state.messages] });
		})
	}

	handleSubmit(event) {
		const newMessage = event.target.value;
		if(event.keyCode === 13 && newMessage) {
			const message = {
				message: newMessage,
				from: this.props.userName
			}
			this.setState({ messages: [message, ...this.state.messages] });
			this.socket.emit('message', message);
			event.target.value = '';
		}
	}

	render() {
		console.log('this.props', this.props);
		return (
			<div className="container" style={styles.container}>

				<ul>
					{this.state.messages.map((message, index) => {
						return <div key={index}>
							<span style={styles.from}>
								<If condition={message.from === this.props.userName}>
									you
								</If>

								<If condition={message.from !== this.props.userName}>
									{message.from}

								</If>

							</span>
							<span style={styles.message}>

								{message.message}
							</span>
						</div>
					})}
				</ul>

				<div className="row" style={styles.sendMessage}>
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
				</div>

		</div>
		)
	}
}

const styles = {
	container: {
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
