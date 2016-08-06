import React from 'react';

export default class DisplayMessage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
						<div className="container" style={styles.container}>
							<ul>
								{this.props.messages.map((message, index) => {
									return <div key={index} className="row">
										<h5>
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
										<If condition={message.message}>
											{message.message}
										</If>
										<If condition={!message.message}>
											<If condition={this.props.userData.language === "en"}>
												{message.enMessage}
											</If>
											<If condition={this.props.userData.language === "es"}>
												{message.esMessage}
											</If>

										</If>
									</span>

								</h5>
							</div>
						})}
					</ul>
				</div>
		)
	}
}

// <ScrollArea
// 	speed={0.8}
// 	className="area"
// 	contentClassName="content"
// 	horizontal={false}
// 	>
// 	{() =>
// 		<div style={styles.test}>
//
// 			what
// 		</div>
// 	}
//
// </ScrollArea>
const styles = {
	container: {
		background: '#fff',
		color: '#696969',
	},
	from: {
		color: '#7B6532'
	},
	container: {
		paddingTop: 100,
		marginBottom: 50
	},
	sentAt: {
		fontSize: 10,
		color: '#696969'
	},
	you: {
		color: 'green'
	},
	message: {
		marginLeft: 20,
		color: '#696969'
	},
	test: {
		height: 500,
		width: 500,
	}
}
