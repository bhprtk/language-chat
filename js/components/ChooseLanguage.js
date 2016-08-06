import React from 'react';

export default class ChooseLanguage extends React.Component {
	render() {
		console.log('this.props.userName', this.props.userName);
		return (
			<div className="text-md-center text-sm-center text-xs-center" style={styles.flags}>
				<div style={styles.description}>
					<h3>Choose your prefered language and start chatting</h3>
					<br/>
					<h3>Elegir el idioma preferido y empezar a chatear</h3>
					<hr/>

				</div>

				<div
					className="btn btn-default btn-lg"
					type="button"
					style={styles.flagButtons}
					onClick={() => this.props.setLanguage('en')}>
					<h1>
						English
					</h1>
				</div>

				<div
					className="btn btn-default btn-lg"
					type="button"
					style={styles.flagButtons}
					onClick={() => this.props.setLanguage('es')}>
					<h1>
						Español
					</h1>
				</div>

			</div>

		)
	}
}

const styles = {
	flags: {
		marginTop: 20
	},
	flagButtons: {
		margin: 10,
		background: '#fff',
		borderColor: '#7B6532',
		borderWidth: 2,
		// height: 200,
		// width: 350,
	},
	description: {
		color: '#fff'
	}
}
