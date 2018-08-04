export const INIT_STATE = {

	width: 0,
	height: 0
};


export class Types {

	static SET_WIDTH = 'WINDOW/SET_WIDTH';
	static SET_HEIGHT = 'WINDOW/SET_HEIGHT';
	static SET_SIZE = 'WINDOW/SET_SIZE';

	static RESIZE = 'WINDOW/RESIZE';
}


export class Actions {

	static setWidth = (width = 0) => ({
		type: Types.SET_WIDTH,
		payload: parseInt(width, 10)
	});

	static setHeight = (height = 0) => ({
		type: Types.SET_HEIGHT,
		payload: parseInt(height, 10)
	});

	static setSize = (size = { width: 0, height: 0 }) => ({
		type: Types.SET_SIZE,
		payload: {
			width: !size || !size.width ? 0 : size.width,
			height: !size || !size.height ? 0 : size.height
		}
	});

	static resize = () => ({
		type: Types.RESIZE
	});
}


export const reducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case Types.SET_WIDTH:
			return { ...state, width: payload };
		case Types.SET_HEIGHT:
			return { ...state, height: payload };
		case Types.SET_SIZE:
			return { ...state, width: payload.width, height: payload.height };
		default:
			return state;
	}
};