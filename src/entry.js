import ReactDOM from 'react-dom';
import React from 'react';
import {myElement} from './my_element';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './app_component';
import {combineEpics} from 'redux-observable';
import {createEpicMiddleware} from 'redux-observable';
import {timeEpic} from './orchestration/timer';
import * as _ from 'lodash'

const basicReducer = (state, action) => {
    switch(action.type) {
    case 'PING':
	return _.merge({}, state, {
	    ping_pong: {
		value: "ping"
	    }
	});
    case 'PONG':
	return _.merge({}, state, {
	    ping_pong: {
		value: "pong"
	    }
	});
    default:
	return state;
    }
}

const initialState = {
    name: "another name again",
    ping_pong: {
	value: "click to begin"
    }
}

const combinedEpics = createEpicMiddleware(combineEpics(timeEpic));


ReactDOM.render(
	<Provider store={
	    createStore(
		basicReducer,
		initialState,
		applyMiddleware(combinedEpics)
	    )}>
	<AppContainer/>
	</Provider>,
    document.getElementById('app')
);
