// ReactApp/src/js/index.js this is our main file
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import useragent from './ua';

import { Provider } from 'react-redux';
import {storeClient} from './store/store';

const store = storeClient;
const rootElement = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App userAgent={useragent} />
		</BrowserRouter>
	</Provider>, 
	rootElement
);