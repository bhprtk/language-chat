import React from 'react';
import io from 'socket.io-client';

export default class DisplayUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: null
		}
	}

	componentDidMount() {
		// this.socket = io();
		this.props.socket.on('updateCount', count => {
			console.log('count', count);
			this.setState({count: count})
		})
	}

	render() {
		return (
			<nav className="navbar navbar-fixed-top navbar-light" style={styles.navbar}>
				<div className="container">
					<h4 className="pull-md-left pull-sm-left pull-xs-left">
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

					<h6 className="pull-md-right pull-sm-right pull-xs-right">
						<If condition={this.state.count}>
							{this.state.count}
							<span style={styles.users}>
								<If condition={this.state.count !== 1}>
									users
								</If>
								<If condition={this.state.count === 1}>
									user
								</If>

							</span>
							online
						</If>
					</h6>

				</div>

			</nav>
		)
	}
}

const styles = {
	userName: {
		color: 'green',
		marginLeft: 10
	},
	navbar: {
		background: '#fff',
		paddingTop: 10
	},
	users: {
		marginLeft: 3,
		marginRight: 3
	}
}
