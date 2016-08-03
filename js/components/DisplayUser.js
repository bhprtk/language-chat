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
		return (
			<nav className="navbar navbar-fixed-top">
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

			</nav>
		)
	}
}

const styles = {
	userName: {
		color: 'green'
	}
}
