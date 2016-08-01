import React from 'react';

export default class DisplayMessage extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		console.log('this.props.messages', this.props.messages);
		return (
			<ul>
				{this.props.messages.map((message, index) => {
					return <div key={index}>
						<span style={styles.from}>
							<If condition={message.from === this.props.userNameData}>
								you
							</If>

							<If condition={message.from !== this.props.userNameData}>
								{message.from}

							</If>

						</span>
						<span style={styles.message}>

							{message.message}
						</span>
					</div>
				})}
			</ul>
		)
	}
}

const styles = {
	from: {
		color: 'green'
	},
}
