export const INIT_STATE = {

	head: null,
	body: null,
	tail: null
};


export class Types {

	static SET_HEAD = 'SNAKE/SET_HEAD';
	static SET_BODY = 'SNAKE/SET_BODY';
	static SET_TAIL = 'SNAKE/SET_TAIL';
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
}


export const reducer = (state = INIT_STATE, { type, payload }) => {
	switch (type) {
		case Types.SET_HEAD:
			return { ...state, head: payload };
		case Types.SET_BODY:
			return { ...state, body: payload };
		case Types.SET_TAIL:
			return { ...state, tail: payload };
		default:
			return state;
	}
};