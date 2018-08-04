import React, { Component } from 'react';
import { number, object, array } from 'prop-types';


class SnakeBody extends Component {

	static propTypes = {
		size: number.isRequired,
		positions: array
	};


	render() {
		return (
			<div>
				
			</div>
		);
	}
}


export default SnakeBody;