import React from 'react';
import classNames from 'classnames';

import TextBox from './TextBox'

export default class UserName extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			callTextBox: false,
			hoveringEn: false,
			hoveringEs: false,
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

		let eshover = classNames({
			'animated pulse': this.state.hoveringEs,
		})
		let enhover = classNames({
			'animated pulse': this.state.hoveringEn
		})

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

							<div className="row text-md-center text-sm-center text-xs-center" style={styles.flags}>
								<img
									className={enhover}
									style={styles.enFlag}
								 	src='http://fla.fg-a.com/American/1-lg-american-flag.jpg'
									width='100'
									height='75'
									role='button'
									onMouseOver={() => this.setState({hoveringEn: true})}
									onMouseLeave={() => this.setState({hoveringEn: false})}
									onClick={() => console.log('hello')}/>

								<img
									className={eshover}
									style={styles.esFlag}
								 	src='http://static.donquijote.org/images/culture/spanish_flag2.jpg'
									width='100'
									height='75'
									role='button'
									onMouseOver={() => this.setState({hoveringEs: true})}
									onMouseLeave={() => this.setState({hoveringEs: false})}
									onClick={() => console.log('hello')}/>

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
	},
	flags: {
		marginTop: 20
	},
	esFlag: {
		margin: 10
	}
}
