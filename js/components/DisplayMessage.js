import React from 'react';

export default class DisplayMessage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('this.props.messsages', this.props.messages);
		console.log('this.props.userData', this.props.userData);
		return (
			<div className="container" style={styles.container}>
				<ul>
					{this.props.messages.map((message, index) => {
						return <div key={index} className="row">
							<span style={styles.from}>

								<If condition={message.from === this.props.userData.userName}>
									<span style={styles.you}>
										You <span style={styles.sentAt}>{message.sentAt}</span>
									</span>
								</If>

								<If condition={message.from !== this.props.userData.userName}>
									<span>
										{message.from} <span style={styles.sentAt}>{message.sentAt}</span>
									</span>
								</If>

							</span>
							<span style={styles.message}>
								{message.message}
							</span>
						</div>
					})}
				</ul>

			</div>
		)
	}
}

const styles = {
	from: {
		color: '#7B6532'
	},
	container: {
		paddingTop: 60
	},
	sentAt: {
		fontSize: 10,
		color: '#696969'
	},
	you: {
		color: 'green'
	},
	message: {
		marginLeft: 20
	}
}
