import React from 'react';

import TextBox from './TextBox'

export default class UserName extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		const userName = event.target.value;
		if(event.keyCode === 13 && userName) {
			this.setState({userName})
			event.target.value = '';
		}

	}

	render() {
		console.log('this.state.userName', this.state.userName);
		return (
			<div>
				<If condition={!this.state.userName}>
					<div className="container">

						<div>
							<input
								className="col-md-8 col-xs-8 col-sm-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2"
								type="text"
								placeholder="Enter username"
								onKeyUp={this.handleSubmit}
								style={styles.textBox}
								/>

							<select class="form-control col-md-8 col-xs-8 col-sm-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
								<option value="en">English</option>
								<option value="sp">Spanish</option>
							</select>

						</div>
					</div>
				</If>

				<If condition={this.state.userName}>
					<TextBox userName={this.state.userName}/>
				</If>
			</div>
		)
	}
}

const styles = {
	textBox: {
		height: 50,
		marginTop: 100,

	}
}
