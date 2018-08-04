import React, { Component } from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';


export const HEIGHT = 40;


const StyleWrapper = styled.div`
	height: ${HEIGHT}px;
	max-height: ${HEIGHT}px;
	min-height: ${HEIGHT}px;
	width: 100%;
	text-align: center;
`;


class Statistics extends Component {

	static propTypes = {
		visible: bool.isRequired
	}

	static defaultProps = {
		visible: true
	}


	render() {
		const { visible } = this.props;

		return (
			<StyleWrapper className={visible ? 'Statistics' : 'DisplayNone'}>
				Statistics
			</StyleWrapper>
		);
	}
}


export default Statistics;