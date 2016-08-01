import React from 'react';

export default class DisplayUser extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('this.props', this.props);
		return (
			<h4>
				Hello,
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
