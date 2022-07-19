import React from "react";

export default class TableContainer extends React.Component {
	render() {
		const containerstyle = {};
		const elementStyle = { margin: "0 auto" };

		return (
			<div style={containerstyle}>
				<table style={elementStyle}>
					<tbody>{this.props.children}</tbody>
				</table>
			</div>
		);
	}
}
