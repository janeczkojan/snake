import React, { Component } from 'react';
import styled from 'styled-components';


export const HEIGHT = 54;


const StyleWrapper = styled.div`
	height: ${HEIGHT}px;
	max-height: ${HEIGHT}px;
	min-height: ${HEIGHT}px;
	width: 100%;

	h1 {
		text-align: center;
		height: 38px;
		font-size: 32px;
		padding: 8px;
	}
`;


class Header extends Component {

	render() {
		return (
			<StyleWrapper className="Header">
				<h1>Snake 1.0.0</h1>
			</StyleWrapper>
		);
	}
}


export default Header;