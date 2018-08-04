import React, { Component } from 'react';
import styled from 'styled-components';


export const HEIGHT = 40;


const StyleWrapper = styled.div`
	height: ${HEIGHT}px;
	max-height: ${HEIGHT}px;
	min-height: ${HEIGHT}px;
	width: 100%;
	text-align: center;
	margin-top: 20px;
`;


class Actions extends Component {

	render() {
		return (
			<StyleWrapper className="Actions">
				<button>btn</button>
			</StyleWrapper>
		);
	}
}


export default Actions;