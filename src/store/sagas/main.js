import { put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { FIELDS_PER_LINE } from '../../config/game_board';

import { 
	Actions as WindowActions,
	Types as WindowTypes
} from '../state/window';

import {
	Actions as GameActions
} from '../state/game';


export function* windowResize(action) {
	let size = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	yield put(WindowActions.setSize(size));

	const { game } = yield select();
	const gameElement = document.querySelector('.Game');

	if (!!gameElement && !game.running) {
		size = {
			width: parseInt(gameElement.clientWidth, 10),
			height: parseInt(gameElement.clientHeight, 10)
		}
		
		size = size.width < size.height ? size.width : size.height;
		size -= 180;
		size -= (size % FIELDS_PER_LINE);

		yield put(GameActions.setBoardSize(size));
		yield put(GameActions.setFieldSize(size / FIELDS_PER_LINE));
	}
}


function* saga() {
	yield takeLatest(WindowTypes.RESIZE, windowResize);
}


export default saga;