import React, { Component } from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { RUNNING, FINISHED } from '../config/game_status';


export const HEIGHT = 40;


const StyleWrapper = styled.div`
	height: ${HEIGHT}px;
	max-height: ${HEIGHT}px;
	min-height: ${HEIGHT}px;
	width: 100%;
	text-align: center;
	visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;

StyleWrapper.propTypes = {
	visible: bool.isRequired
};


class Statistics extends Component {

	static propTypes = {
		visible: bool.isRequired
	}


	render() {
		const { visible } = this.props;

		return (
			<StyleWrapper className="Statistics" visible={visible}>
				Statistics
			</StyleWrapper>
		);
	}
}


export default connect(
	(state) => ({
		visible: state.game.status === RUNNING || state.game.status === FINISHED
	}),
	(dispatch) => ({

	})
)(Statistics);