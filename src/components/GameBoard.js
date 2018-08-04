import React, { Component } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import Snake from './Snake';


const StyleWrapper = styled.div`
	background-color: lightgray;
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};
	max-width: ${({ size }) => `${size}px`};
	max-height: ${({ size }) => `${size}px`};
	min-width: ${({ size }) => `${size}px`};
	min-height: ${({ size }) => `${size}px`};
	border: 4px solid darkgray;
	position: relative;
`;

StyleWrapper.propTypes = {
	size: number.isRequired
};


class GameBoard extends Component {

	static propTypes = {
		size: number.isRequired
	};


	render() {
		const { size } = this.props;

		return (
			<StyleWrapper className="GameBoard" size={size}>
				<Snake />
			</StyleWrapper>
		);
	}
}


export default GameBoard;