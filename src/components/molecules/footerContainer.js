import React from "react";

export default class FooterContainer extends React.Component {
	render() {
		const containerstyle = {};

		return (
			<div style={containerstyle}>
				<p>Rates are based from 1 USD.</p>
				<p>This Application uses API from https://currencyfreaks.com</p>
			</div>
		);
	}
}
