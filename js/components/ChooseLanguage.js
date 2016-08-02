import React from 'react';

export default class ChooseLanguage extends React.Component {
	render() {
		console.log('this.props.userName', this.props.userName);
		return (
			<div className="text-md-center text-sm-center text-xs-center" style={styles.flags}>

				<h4>Choose your prefered language</h4>
				<br/>
				<h4>Elija su idioma preferido</h4>
				<hr/>

				<button
					className="btn btn-default btn-lg"
					type="button"
					style={styles.flagButtons}
					onClick={() => this.props.setLanguage('en')}>
					English
				</button>

				<button
					className="btn btn-default btn-lg"
					type="button"
					style={styles.flagButtons}
					onClick={() => this.props.setLanguage('es')}>
					Español
				</button>

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
		borderWidth: 2
	},
}
