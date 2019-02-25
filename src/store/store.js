// import reducerOne from '../reducers/reducerOne';
// import { createStore } from 'redux';
// const store = createStore(reducerOne);
// console.log(store.getState());
// export default store;

import reducerOne from '../reducers/reducerOne';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var preloadedState = {};
var setConts={};

// const customMiddleWare = store => next => action => {
//   console.log("Middleware triggered:", action);
//   next(action);
// }

// const reducer = combineReducers({
//     reducerOne: reducerOne
//     // items: itemsReducer
// });



if (typeof window != 'undefined' && window.__PRELOADED_STATE__) {
	//For first time SSR and then handle client side too...
    preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
    console.log('%c In Window', 'background:#e25d0f;color:#fff');
    setConts = createStore(reducerOne, preloadedState, compose(applyMiddleware(thunk)));
}
else{ 
	//Only For CLient Side rendering with web-dev-server : npm run clientapp
	console.log('%c No Window', 'background:#e25d0f;color:#fff');
	setConts = createStore(reducerOne);
}

export const storeClient = setConts;
console.log('storeClient',storeClient.getState());


//Server side store setting with express
export const storeServer = createStore(reducerOne, compose(applyMiddleware(thunk)));

//console.log('storeServer',storeServer.getState());
// export default store;

