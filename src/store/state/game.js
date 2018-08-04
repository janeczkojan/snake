import * as GAME_STATUS from '../../config/game_status';


export const INIT_STATE = {

	status: GAME_STATUS.NONE,
	boardSize: 0,
	fieldSize: 0
};


export class Types {

	static SET_STATUS = 'GAME/SET_STATUS';
	static SET_BOARD_SIZE = 'GAME/SET_BOARD_SIZE';
	static SET_FIELD_SIZE = 'GAME/SET_FIELD_SIZE';

	static START = 'GAME/START';
	static STOP = 'GAME/STOP';
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

	static start = () => ({
		type: Types.START
	});

	static stop = () => ({
		type: Types.STOP
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
		default:
			return state;
	}
};