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
			this.setState({ messages: [message, ...this.state.messages] });
		})
	}

	handleSubmit(event) {
		const body = event.target.value;
		if(event.keyCode === 13 && body) {
			const message = {
				body,
				from: 'Me'
			}
			this.setState({ messages: [message, ...this.state.messages] });
			this.socket.emit('message', body);
			event.target.value = '';
		}
	}

	render() {

		return (
			<div className="container" style={styles.container}>

					<input
						className="form-control"
						type="text"
						placeholder="Enter a message.."
						onKeyUp={this.handleSubmit}
						/>


				<ul>
					{this.state.messages.map((message, index) => {
						return <li key={index}>{message.body}</li>
					})}
				</ul>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: 10
	}
}
