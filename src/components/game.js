import React, { Component } from 'react';
import { func, number, bool } from 'prop-types';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import { connect } from 'react-redux';
import { RUNNING } from '../config/game_status';


const StyleWrapper = styled.div`
	height: 100%;
	visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;

StyleWrapper.propTypes = {
	visible: bool.isRequired
};


class Game extends Component {

	static propTypes = {
		boardSize: number.isRequired,
		visible: bool.isRequired
	};


	render() {
		const { boardSize, visible } = this.props;

		return (
			<StyleWrapper className="Game" visible={visible}>
				<GameBoard size={boardSize} />
			</StyleWrapper>
		);
	}
}


export default connect(
  (state) => ({
		boardSize: state.game.boardSize,
		visible: state.game.status === RUNNING
	}),
  (dispatch) => ({
    
  })
)(Game);