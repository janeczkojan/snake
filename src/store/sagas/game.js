import { put, takeEvery, takeLatest, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as GAME_STATUS from '../../config/game_status';
import { KEYS } from '../../config/direction_keys';
import { FIELDS_PER_LINE } from '../../config/game_board';
import { windowResize } from './main';

import {
	Types as GameTypes,
	Actions as GameActions
} from '../state/game';

import {
	Types as SnakeTypes,
	Actions as SnakeActions
} from '../state/snake';


export function* startGame(action) {
	yield put(GameActions.setStatus(GAME_STATUS.STARTING));
	yield put(GameActions.setScore(0));
	yield put(SnakeActions.clearAll());

	const { game } = yield select();
	const headX = game.fieldSize * parseInt(FIELDS_PER_LINE / 2, 10);
	const headY = game.fieldSize * parseInt(FIELDS_PER_LINE / 2, 10);

	yield put(SnakeActions.setHead({ x: headX, y: headY }));

	yield put(GameActions.setStatus(GAME_STATUS.RUNNING));
}


export function* stopGame(action) {
	yield put(GameActions.setStatus(GAME_STATUS.FINISHED));
	yield delay(5000);
	yield put(GameActions.setStatus(GAME_STATUS.NONE));
	yield put(GameActions.setScore(0));
}


export function* keyPress(action) {
	const { game } = yield select();
	const key = action.payload;

	if (game.status === GAME_STATUS.RUNNING && !!key && !!KEYS[key]) {
		yield put(SnakeActions.setDirection(KEYS[key]));
	}
}


export function* saga() {
	yield takeEvery(GameTypes.START, startGame);
	yield takeEvery(GameTypes.STOP, stopGame);
	yield takeLatest(GameTypes.KEY_PRESS, keyPress);
}


export default saga;