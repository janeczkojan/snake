import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bool, func, string } from 'prop-types';
import { RUNNING, STARTING, FINISHED, NONE } from '../config/game_status';
import { Actions as GameActions } from '../store/state/game';


export const HEIGHT = 40;


const StyleWrapper = styled.div`
	height: ${HEIGHT}px;
	max-height: ${HEIGHT}px;
	min-height: ${HEIGHT}px;
	width: 100%;
	text-align: center;
	margin-top: 20px;

	.Button {
		padding: 5px;
		font-size: 20px;
		width: 150px;
	}
`;


class Actions extends Component {

	static propTypes = {
		gameStatus: string.isRequired,
		startGame: func.isRequired,
		stopGame: func.isRequired
	};


	statusData = {

		[STARTING]: {
			text: 'Starting...',
			action: () => {}
		},
		[RUNNING]: {
			text: 'Stop',
			action: () => this.props.stopGame()
		},
		[FINISHED]: {
			text: 'Start',
			action: () => this.props.startGame()
		},
		[NONE]: {
			text: 'Start',
			action: () => this.props.startGame()
		}
	};

	render() {
		const { gameStatus } = this.props;
		const status = this.statusData[gameStatus];

		return (
			<StyleWrapper className="Actions">
				<button className="Button" type="button" onClick={status.action}>
					{status.text}
				</button>
			</StyleWrapper>
		);
	}
}


export default connect(
  (state) => ({
		gameStatus: state.game.status
	}),
  (dispatch) => ({
		startGame: () => dispatch(GameActions.start()),
		stopGame: () => dispatch(GameActions.stop())
  })
)(Actions);