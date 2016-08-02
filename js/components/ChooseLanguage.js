import React from 'react';

export default class ChooseLanguage extends React.Component {
	render() {
		return (
			<div className="text-md-center text-sm-center text-xs-center" style={styles.flags}>

				<p>Choose your prefered language</p>
				<p>Elija su idioma preferido</p>

				<button
					className="btn btn-secondary-outline btn-lg"
					type="button"
					style={styles.enFlag}
					onClick={() => console.log('hello')}>
					English
				</button>

				<button
					className="btn btn-secondary-outline btn-lg"
					type="button"
					style={styles.esFlag}
					onClick={() => console.log('hello')}>
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
	enFlag: {
		margin: 10
	},
	esFlag: {
		margin: 10
	},
}
