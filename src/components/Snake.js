import React, { Component, Fragment } from 'react';
import SnakeHead from './SnakeHead';
import SnakeBody from './SnakeBody';
import SnakeTail from './SnakeTail';


class Snake extends Component {

	render() {
		return (
			<Fragment>
				<SnakeHead />
				<SnakeBody />
				<SnakeTail />
			</Fragment>
		);
	}
}


export default Snake;