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

	setUserName(e) {
		e.preventDefault();
		this.setState({
			userName: this.state.tempUserName
		})
	}

		setLanguage(language, userName) {
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
			<div style={styles.mainBody}>
					<If condition={!this.state.callTextBox}>
						<div style={styles.container}>
						<div className="container">

							<If condition={!this.state.userName}>
								<h1
									className="text-md-center text-sm-center text-xs-center"
									style={styles.title}>
									<strong>
										INTER LANGUAGE CHAT
									</strong>
								</h1>

								<div
									className="text-md-center text-sm-center text-xs-center">
									<div className="row">
										<form onSubmit={this.setUserName}>
											<h2>

												<input
													className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 text-md-center text-xs-center text-sm-center"
													type="text"
													placeholder="Enter your name"
													onChange={e => this.setState({tempUserName: e.target.value})}
													style={styles.textBox}
													required
													/>



											</h2>

											{/*<button className="btn btn-default" style={styles.buttons}>
											Submit
											</button>*/}

										</form>

									</div>

									<div style={styles.description} className="row">
										<h5>Enter your name and press enter and start chatting in your own language with people who speak other languages.</h5>
										<br/>
										<h5>Introduzca su nombre y pulse ENTER e iniciar una conversación en su propio idioma con personas que hablan otros idiomas.</h5>

									</div>

								</div>

							</If>

							<If condition={this.state.userName}>
								<div style={styles.ifUserName}>
									<button
										style={styles.buttons}
										className="btn btn-default btn-lg"
										onClick={() => this.setState({userName: null})}>
										Back
									</button>
									<hr/>
									<h3
										className="text-md-center text-sm-center text-xs-center"
										style={styles.hello}>
										Hello <strong>{this.state.userName}</strong>
								</h3>

								<div className="row">
									<ChooseLanguage setLanguage={this.setLanguage} />

								</div>

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
	mainBody: {
		// backgroundImage: `url('http://cdn.bigbangfish.com/city/429824-awesome-city-wallpaper.jpg')`,
		// backgroundRepeat: 'no-repeat',
	},
	container: {
		// color: '#fff',
		height: '100vh',
		background: '#3B5F9B',
		paddingTop: 200,
		color: '#696969'
	},
	textBox: {
		height: 75,
		marginTop: 20,
		marginBottom: 20,
		color: '#696969',
		// fontFamily: 'Bangers',

	},
	hello: {
		color: '#fff'
	},
	enterButton: {
		height: 75,
		marginTop: 20,
		marginBottom: 20,
	},
	select: {
		height: 50,
		marginTop: 20
	},
	title: {
		color: '#fff',
		fontFamily: 'Bangers',
		fontSize: 70
	},
	description: {
		paddingTop: 20,
		paddingBottom: 20,
		color: '#d8d8d8'

	},
	buttons: {
		background: '#fff',
		borderColor: '#7B6532',
		borderWidth: 2,
		color: '#3B5F9B'
	},
	ifUserName: {
		marginTop: '-100'
	}
}
