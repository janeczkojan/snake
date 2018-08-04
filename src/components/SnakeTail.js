import React, { Component } from 'react';
import { number, object } from 'prop-types';


class SnakeTail extends Component {

	static propTypes = {
		size: number.isRequired,
		position: object
	};


	render() {
		return (
			<div>
				
			</div>
		);
	}
}


export default SnakeTail;