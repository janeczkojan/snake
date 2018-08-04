import { put, takeEvery, takeLatest, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as GAME_STATUS from '../../config/game_status';
import { windowResize } from './main';

import {
	Types as GameTypes,
	Actions as GameActions
} from '../state/game';


export function* startGame(action) {
	yield put(GameActions.setStatus(GAME_STATUS.STARTING));


	yield put(GameActions.setStatus(GAME_STATUS.RUNNING));
}


export function* stopGame(action) {
	yield put(GameActions.setStatus(GAME_STATUS.FINISHED));
	yield delay(5000);
	yield put(GameActions.setStatus(GAME_STATUS.NONE));
}


export function* saga() {
	yield takeEvery(GameTypes.START, startGame);
	yield takeEvery(GameTypes.STOP, stopGame);
}


export default saga;