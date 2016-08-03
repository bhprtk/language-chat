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
									<span className="col-md-3 col-sm-3 col-xs-3">
										You <span style={styles.sentAt}>{message.sentAt}</span>
									</span>
								</If>

								<If condition={message.from !== this.props.userData.userName}>
									<span className="col-md-3 col-sm-3 col-xs-3">
										{message.from} <span style={styles.sentAt}>{message.sentAt}</span>
									</span>
								</If>

							</span>
							<span style={styles.message} className="col-md-8 col-sm-8 col-xs-8">
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
		color: 'green'
	},
	container: {
		paddingTop: 60
	},
	sentAt: {
		fontSize: 10
	}
}
