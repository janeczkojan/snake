import React, { Component } from 'react';
import styled from 'styled-components';
import { number, object } from 'prop-types';


const StyleWrapper = styled.div`
	background-color: darkgreen;
	position: absolute;
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};

	.InnerHead {
		position: absolute;
		border: 1px solid black;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;

StyleWrapper.propTypes = {
	size: number.isRequired,
	position: object
};


class SnakeHead extends Component {

	static propTypes = {
		size: number.isRequired,
		position: object.isRequired
	};


	render() {
		const { size, position } = this.props;

		return (
			<StyleWrapper size={size} position={position}>
				<div className="InnerHead"></div>
			</StyleWrapper>
		);
	}
}


export default SnakeHead;