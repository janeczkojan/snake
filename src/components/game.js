import React, { Component } from 'react';
import { func, number, bool, object } from 'prop-types';
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
		fieldSize: number.isRequired,
		visible: bool.isRequired,
		snake: object.isRequired
	};


	render() {
		const { boardSize, visible, snake, fieldSize } = this.props;

		return (
			<StyleWrapper className="Game" visible={visible}>
				<GameBoard 
					size={boardSize} 
					snake={snake}
					fieldSize={fieldSize}
				/>
			</StyleWrapper>
		);
	}
}


export default connect(
  (state) => ({
		boardSize: state.game.boardSize,
		fieldSize: state.game.fieldSize,
		visible: state.game.status === RUNNING,
		snake: state.snake
	}),
  (dispatch) => ({
    
  })
)(Game);