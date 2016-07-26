import React from 'react';
import io from 'socket.io-client';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: []
		}
		this.submitMessage = this.submitMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	submitMessage(e) {
		e.preventDefault();
		this.setState({messages: [this.state.message, ...this.state.messages]});
	}

	handleSubmit(event) {
		const body = event.target.value;
		if(event.keyCode === 13 && body) {
			const message = {
				body,
				from: 'Me'
			}
			this.setState({ messages: [message, ...this.state.messages] });
			event.target.value = '';
		}
	}

	render() {

		// let messages = this.state.messages.reverse();

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
