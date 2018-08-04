export const INIT_STATE = {

	running: false,
	finished: false,
	boardSize: 0,
	fieldSize: 0
};


export class Types {

	static SET_RUNNING = 'GAME/SET_RUNNING';
	static SET_FINISHED = 'GAME/SET_FINISHED';
	static SET_BOARD_SIZE = 'GAME/SET_BOARD_SIZE';
	static SET_FIELD_SIZE = 'GAME/SET_FIELD_SIZE';
}


export class Actions {

	static setRunning = (running = false) => ({
		type: Types.SET_RUNNING,
		payload: running === true
	});

	static setFinished = (finished = false) => ({
		type: Types.SET_FINISHED,
		payload: finished === true
	});

	static setBoardSize = (size = 0) => ({
		type: Types.SET_BOARD_SIZE,
		payload: parseInt(size, 10)
	});

	static setFieldSize = (size = 0) => ({
		type: Types.SET_FIELD_SIZE,
		payload: parseInt(size, 10)
	});
}


export const reducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case Types.SET_RUNNING:
			return { ...state, running: payload };
		case Types.SET_FINISHED:
			return { ...state, finished: payload };
		case Types.SET_BOARD_SIZE:
			return { ...state, boardSize: payload };
		case Types.SET_FIELD_SIZE:
			return { ...state, fieldSize: payload };
		default:
			return state;
	}
};