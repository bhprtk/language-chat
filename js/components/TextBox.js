import React from 'react';
import io from 'socket.io-client';

export default class TextBox extends React.Component {

	constructor(props) {
		super(props);

		this.submitMessage = this.submitMessage.bind(this);
	}

	submitMessage(e) {
		e.preventDefault();

	}

	render() {
		return (
			<div className="container" style={styles.container}>
				<form>
					<fieldset className="form-group">
						<input
							type="text"
							className="form-control"
							onSubmit={this.submitMessage}
							required />
					</fieldset>
				</form>

			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: 10
	}
}
