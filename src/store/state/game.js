import * as GAME_STATUS from '../../config/game_status';
import * as SNAKE_DIRECTION from '../../config/snake_direction';


export const INIT_STATE = {

	status: GAME_STATUS.NONE,
	boardSize: 0,
	fieldSize: 0,
	score: 0
};


export class Types {

	static SET_STATUS = 'GAME/SET_STATUS';
	static SET_BOARD_SIZE = 'GAME/SET_BOARD_SIZE';
	static SET_FIELD_SIZE = 'GAME/SET_FIELD_SIZE';
	static SET_SCORE = 'GAME/SET_SCORE';

	static CLEAR_ALL = 'GAME/CLEAR_ALL';
	static INCREMENT_SCORE = 'GAME/INCREMENT_SCORE';

	static START = 'GAME/START';
	static STOP = 'GAME/STOP';
	static KEY_PRESS = 'GAME/KEY_PRESS';
}


export class Actions {

	static setStatus = (status = GAME_STATUS.NONE) => ({
		type: Types.SET_STATUS,
		payload: !status ? GAME_STATUS.NONE : status
	});

	static setBoardSize = (size = 0) => ({
		type: Types.SET_BOARD_SIZE,
		payload: parseInt(size, 10)
	});

	static setFieldSize = (size = 0) => ({
		type: Types.SET_FIELD_SIZE,
		payload: parseInt(size, 10)
	});

	static setScore = (score = 0) => ({
		type: Types.SET_SCORE,
		payload: parseInt(score, 10)
	});


	static clearAll = () => ({
		type: Types.CLEAR_ALL
	});

	static incrementScore = () => ({
		type: Types.INCREMENT_SCORE
	});


	static start = () => ({
		type: Types.START
	});

	static stop = () => ({
		type: Types.STOP
	});

	static keyPress = (key = null) => ({
		type: Types.KEY_PRESS,
		payload: key
	});
}


export const reducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case Types.SET_STATUS:
			return { ...state, status: payload };
		case Types.SET_BOARD_SIZE:
			return { ...state, boardSize: payload };
		case Types.SET_FIELD_SIZE:
			return { ...state, fieldSize: payload };
		case Types.SET_SCORE:
			return { ...state, score: payload };
		case Types.CLEAR_ALL:
			return { ...INIT_STATE };
		case Types.INCREMENT_SCORE:
			return { ...state, score: state.score + 1 };
		default:
			return state;
	}
};