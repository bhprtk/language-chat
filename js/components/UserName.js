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

	// setUserName(event) {
	// 	const body = event.target.value;
	// 	if(event.keyCode === 13 && body) {
	// 		this.setState({
	// 			userName: body
	// 		});
	//
	// 	}
	// 		console.log('this.state after setUserName', this.state);
	// 	}

	setUserName(e) {
		e.preventDefault();
		this.setState({
			userName: this.state.tempUserName
		})
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

		componentDidMount() {

		}

	render() {

		return (
			<div>
					<If condition={!this.state.callTextBox}>
						<div style={styles.container}>
						<div className="container">

							<If condition={!this.state.userName}>
								<h4
									className="text-md-center text-sm-center text-xs-center"
									style={styles.title}>
									<strong>
										INTER LANGUAGE CHAT
									</strong>
								</h4>

							</If>

							<If condition={this.state.userName}>
								<button
									style={styles.buttons}
									className="btn btn-default"
									onClick={() => this.setState({userName: null})}>
									Back
								</button>
								<hr/>
								<h4
									className="text-md-center text-sm-center text-xs-center"
									style={styles.title}>
									<strong>
										HELLO {this.state.userName}
									</strong>
								</h4>
							</If>



							<If condition={!this.state.userName}>
								<div
									className="col-md-8 col-md-offset-2 text-md-center text-sm-center text-xs-center">
									<div style={styles.description}>
										<h5>Type a username and press enter</h5>
										<br/>
										<h5>Escriba un nombre de usuario y pulse enter</h5>
										<hr/>

									</div>
									<form onSubmit={this.setUserName}>
										<input
											className="form-control text-md-center text-xs-center text-sm-center"
											type="text"
											placeholder="Enter username"
											onChange={e => this.setState({tempUserName: e.target.value})}
											style={styles.textBox}
											required
											/>

										<button className="btn btn-default" style={styles.buttons}>
											Submit
										</button>

									</form>

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
		color: '#7B6532'
	},
	textBox: {
		height: 50,
		marginTop: 20,
		marginBottom: 20,

	},
	select: {
		height: 50,
		marginTop: 20
	},
	title: {
		color: '#696969',
	},
	description: {
		paddingTop: 20,
		paddingBottom: 20,
	},
	buttons: {
		background: '#fff',
		borderColor: '#7B6532',
		borderWidth: 2
	}
}
