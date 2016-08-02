import React from 'react';
import classNames from 'classnames';

import TextBox from './TextBox'
import ChooseLanguage from './ChooseLanguage'

export default class UserName extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			callTextBox: false,
			textBoxData: {
				userName: null,
				language: ''
			}
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		// this.submitForm = this.submitForm.bind(this);
	}

	// submitForm(event) {
	// 	event.preventDefault();
	//
	// 	this.setState({
	// 		textBoxData: {
	// 			userName: this.state.userName,
	// 			language: this.state.language || 'en',
	// 		},
	// 		callTextBox: true
	// 	});
	// }

	handleSubmit(event) {
		const body = event.target.value;
		if(event.keyCode === 13 && body) {
			this.setState({
				textBoxData: {
					userName: event.target.value,
					language: this.state.language || 'en',
				},
				// callTextBox: true
			});
			}
			// event.target.value = '';
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
		console.log('this.state', this.state);

		return (
			<div style={styles.container}>
				<If condition={!this.state.callTextBox}>
					<div className="container">

						<p
							className="text-md-center text-sm-center text-xs-center"
							style={styles.title}>
								<strong>
									INTER LANGUAGE CHAT

								</strong>

						</p>


						<If condition={!this.state.textBoxData.userName}>
							<div className="col-md-6 col-sm-6 col-xs-6 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 text-md-center text-sm-center text-xs-center">
								<p>Type a username and press enter</p>
								<p>Escriba un nombre de usuario y pulse Intro</p>
								<input
									className="form-control"
									type="text"
									placeholder="Enter username"
									onKeyUp={this.handleSubmit}
									style={styles.textBox}
									/>

							</div>

						</If>

						<If condition={this.state.textBoxData.userName}>

							<div className="row">
								<ChooseLanguage />

							</div>
						</If>


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
	container: {
		paddingTop: 200,
		background: '#FDEDC7',
		height: '100vh',
		color: '#7B6532'
	},
	textBox: {
		height: 50,
		marginTop: 100,

	},
	select: {
		height: 50,
		marginTop: 20
	},
	title: {
		color: '#EF4E42',
		fontSize: 64
	}
}
