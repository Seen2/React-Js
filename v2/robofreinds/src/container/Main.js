import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import rootReducer from './redux/reducers/combineReducers';

const store=createStore(rootReducer);
export default class Main extends React.Component{
	render(){
		console.log("In Main:",store.getState());
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
