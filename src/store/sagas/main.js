import { put, takeEvery, takeLatest, select } from 'redux-saga/effects';

import { 
	Actions as WindowActions,
	Types as WindowTypes
} from '../state/window';

import {
	Actions as GameActions
} from '../state/game';


function* windowResize(action) {
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
		size -= (size % 50);

		yield put(GameActions.setBoardSize(size));
		yield put(GameActions.setFieldSize(size / 50));
	}
}


function* saga() {
	yield takeLatest(WindowTypes.RESIZE, windowResize);
}


export default saga;