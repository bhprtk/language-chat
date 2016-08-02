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

		this.setUserName = this.setUserName.bind(this);
		this.setLanguage = this.setLanguage.bind(this);
	}

	setUserName(event) {
		const body = event.target.value;
		if(event.keyCode === 13 && body) {
			this.setState({
				userName: body
			});

		}
			console.log('this.state after setUserName', this.state);
		}

		setLanguage(language, userName) {
			console.log('language', language);
			console.log('this.state in setLanguage', this.state);
			this.setState({
				textBoxData: {
					language: language,
					userName: this.state.userName
				},
				callTextBox: true
			});
		}

	render() {

		return (
			<div>
					<If condition={!this.state.callTextBox}>
						<div style={styles.container}>
						<div className="container">

							<p
								className="text-md-center text-sm-center text-xs-center"
								style={styles.title}>
								<strong>
									INTER LANGUAGE CHAT
								</strong>
							</p>


							<If condition={!this.state.userName}>
								<div className="col-md-6 col-sm-6 col-xs-6 col-md-offset-3 col-sm-offset-3 col-xs-offset-3 text-md-center text-sm-center text-xs-center">
									<p>Type a username and press enter</p>
									<p>Escriba un nombre de usuario y pulse enter</p>
									<input
										className="form-control"
										type="text"
										placeholder="Enter username"
										onKeyUp={this.setUserName}
										style={styles.textBox}
										/>

								</div>

							</If>

							<If condition={this.state.userName}>

								<div className="row">
									<ChooseLanguage setLanguage={this.setLanguage} />
								</div>
							</If>


						</div>
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
		// marginTop: 100,

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
