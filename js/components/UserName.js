import React from 'react';

import TextBox from './TextBox'

export default class UserName extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			callTextBox: false,
		}

		// this.handleSubmit = this.handleSubmit.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(event) {
		event.preventDefault();

		this.setState({
			textBoxData: {
				userName: this.state.userName,
				language: this.state.language || 'en',
			},
			callTextBox: true
		});
	}

	// <div className="col-md-8 col-xs-8 col-sm-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
	// 	<select
	// 		className="form-control"
	// 		style={styles.select}
	// 		onChange={e => this.setState({language: e.target.value})}>
	//
	// 	<option value="en">English</option>
	// 	<option value="es">Spanish</option>
	//
	// 	</select>
	// </div>

	render() {


		return (
			<div>
				<If condition={!this.state.callTextBox}>
					<div className="container">

							<h1 className="text-md-center text-sm-center text-xs-center">Language Chat</h1>

						<form
							onSubmit={this.submitForm}
							className="form-group col-md-8 col-xs-8 col-sm-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">

							<input
								className="form-control"
								type="text"
								placeholder="Enter username"
								onChange={e => this.setState({userName: e.target.value})}
								style={styles.textBox}
								required
								/>

							<div className="row">

							</div>



							<button
							 	className="btn btn-default"
								type="submit">
								Submit
							</button>

						</form>


					</div>
				</If>

				<If condition={this.state.callTextBox}>
					<TextBox userNameData={this.state.textBoxData}/>
				</If>
			</div>
		)
	}
}

const styles = {
	textBox: {
		height: 50,
		marginTop: 100,

	},
	select: {
		height: 50,
		marginTop: 20
	}
}
