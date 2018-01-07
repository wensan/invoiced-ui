import "purecss/build/pure.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const store = createStore (
	rootReducer,
	composeWithDevTools (
		applyMiddleware(thunk)
	)
)

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>, 
	document.getElementById('root')
);
registerServiceWorker();
