import React, { Component } from 'react';

export class TestComponent extends Component {

	render() {
		return (
			<div>
				<p>{this.props.sound}</p>
			</div>
		);
	}
}
