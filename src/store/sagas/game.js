import { put, takeEvery, takeLatest, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as GAME_STATUS from '../../config/game_status';
import { KEYS } from '../../config/direction_keys';
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

	yield put(SnakeActions.setHead({ x: 0, y: 0 }));

	yield put(GameActions.setStatus(GAME_STATUS.RUNNING));
}


export function* stopGame(action) {
	yield put(GameActions.setStatus(GAME_STATUS.FINISHED));
	yield delay(5000);
	yield put(GameActions.setStatus(GAME_STATUS.NONE));
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