import React, { Component } from 'react';
import { func, number } from 'prop-types';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import { connect } from 'react-redux';


const StyleWrapper = styled.div`
	height: 100%;
`;


class Game extends Component {

	static propTypes = {
		boardSize: number.isRequired
	};


	render() {
		const { boardSize } = this.props;

		return (
			<StyleWrapper className="Game">
				<GameBoard size={boardSize} />
			</StyleWrapper>
		);
	}
}


export default connect(
  (state) => ({
		boardSize: state.game.boardSize
	}),
  (dispatch) => ({
    
  })
)(Game);