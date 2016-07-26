import React from 'react';
import io from 'socket.io-client';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: []
		}
		this.submitMessage = this.submitMessage.bind(this);
	}

	submitMessage(e) {
		e.preventDefault();
		this.setState({messages: [this.state.message, ...this.state.messages]});
	}

	render() {

		// let messages = this.state.messages.reverse();

		return (
			<div className="container" style={styles.container}>
				<form
					className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Enter a message.."
						onChange={ e => this.setState({message: e.target.value })} />

					<button
						type="submit"
						className="btn btn-primary-outline"
						onClick={this.submitMessage}>
						Send
					</button>

				</form>

				<ul>
					{this.state.messages.map((message, index) => {
						return <li key={index}>{message}</li>
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
