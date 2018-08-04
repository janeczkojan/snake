import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import state from './state';
import * as sagas from './sagas';


class Store {

	constructor() {
		this.reducers = this.prepareReducers();
		this.allowDevTools = this.prepareAllowDevTools();
		this.middleware = this.prepareMiddleware();
		this.store = this.prepareStore();
		this.runSagas();
	}

	prepareReducers() {
		const reducersCollection = {};

		for (const key in state) {
			const stateItem = state[key];

			if (!!stateItem && !!stateItem.reducer) {
				reducersCollection[key] = state[key].reducer;
			}
		}

		return combineReducers(reducersCollection);
	}

	prepareAllowDevTools() {
		return (
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
		);
	}

	prepareMiddleware() {
		this.sagaMiddleware = createSagaMiddleware();
		this.thunkMiddleware = thunkMiddleware;

		return applyMiddleware(
			this.thunkMiddleware,
			this.sagaMiddleware
		);
	}

	prepareStore() {
		return createStore(
			this.reducers,
			this.allowDevTools,
			this.middleware
		);
	}

	runSagas() {
		if (!!this.sagaMiddleware) {
			for (const saga of Object.values(sagas)) {
				if (!!saga) {
					this.sagaMiddleware.run(saga);
				}
			}
		}
	}

	getStoreForProvider() {
		return this.store;
	}
}


export default Store;