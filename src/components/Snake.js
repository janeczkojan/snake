import React, { Component, Fragment } from 'react';
import { array, number, object } from 'prop-types';
import SnakeHead from './SnakeHead';
import SnakeBody from './SnakeBody';
import SnakeTail from './SnakeTail';


class Snake extends Component {

	static propTypes = {
		head: object,
		body: array,
		tail: object,
		blockSize: number.isRequired
	}


	render() {
		const { blockSize, head, body, tail } = this.props;

		return (
			<Fragment>
				{!!head && <SnakeHead size={blockSize} position={head} />}
				{!!body && <SnakeBody size={blockSize} positions={body} />}
				{!!tail && <SnakeTail size={blockSize} position={tail} />}
			</Fragment>
		);
	}
}


export default Snake;