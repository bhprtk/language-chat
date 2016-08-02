import React from 'react';
import io from 'socket.io-client';

export default class DisplayUser extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.socket = io('/');
		this.socket.on('updateCount', count => {
			console.log('count', count);
		})
	}

	render() {
		console.log('this.props', this.props);
		return (
			<h4>
				<If condition={this.props.userData.language === "en"}>
					Hello,
				</If>
				<If condition={this.props.userData.language === "es"}>
					Hola,
				</If>

				<span style={styles.userName}>
					{this.props.userData.userName}
				</span>
			</h4>
		)
	}
}

const styles = {
	userName: {
		color: 'green'
	}
}
