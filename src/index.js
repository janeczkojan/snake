import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import Store from './store';


const store = new Store();


ReactDOM.render(
	<Provider store={store.getStoreForProvider()}>
		<App />
	</Provider>, 
	document.getElementById('root')
);


registerServiceWorker();


injectGlobal`

	*, html, body {
		margin: auto;
		padding: 0;
		font-family: arial;
	}

	body {
		position: relative;
	}

	.DisplayNone {
		visibility: hidden;
		display: none;
	}
`;