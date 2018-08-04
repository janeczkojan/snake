import React, { Component } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';


const StyleWrapper = styled.div`
	background-color: lightgray;
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};
	max-width: ${({ size }) => `${size}px`};
	max-height: ${({ size }) => `${size}px`};
	min-width: ${({ size }) => `${size}px`};
	min-height: ${({ size }) => `${size}px`};
	/* margin-top: 20px; */
	border: 4px solid darkgray;
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
				
			</StyleWrapper>
		);
	}
}


export default GameBoard;