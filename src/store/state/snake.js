import * as SNAKE_DIRECTION from '../../config/snake_direction';


export const INIT_STATE = {

	head: null,
	body: null,
	tail: null,
	direction: SNAKE_DIRECTION.NONE
};


export class Types {

	static SET_HEAD = 'SNAKE/SET_HEAD';
	static SET_BODY = 'SNAKE/SET_BODY';
	static SET_TAIL = 'SNAKE/SET_TAIL';
	static SET_DIRECTION = 'SNAKE/SET_DIRECTION';

	static CLEAR_ALL = 'SNAKE/CLEAR_ALL';
}


export class Actions {

	static setHead = (head = null) => ({
		type: Types.SET_HEAD,
		payload: !head ? null : head
	});

	static setBody = (body = null) => ({
		type: Types.SET_BODY,
		payload: !body ? null : body
	});

	static setTail = (tail = null) => ({
		type: Types.SET_TAIL,
		payload: !tail ? null : tail
	});

	static setDirection = (direction = SNAKE_DIRECTION.NONE) => ({
		type: Types.SET_DIRECTION,
		payload: !SNAKE_DIRECTION[direction] ? SNAKE_DIRECTION.NONE : direction
	});


	static clearAll = () => ({
		type: Types.CLEAR_ALL
	});
}


export const reducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case Types.SET_HEAD:
			return { ...state, head: payload };
		case Types.SET_BODY:
			return { ...state, body: payload };
		case Types.SET_TAIL:
			return { ...state, tail: payload };
		case Types.SET_DIRECTION:
			return { ...state, direction: payload };
		case Types.CLEAR_ALL:
			return INIT_STATE;
		default:
			return state;
	}
};