import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';
import {searchReducer} from './redux/reducers/searchReducer';

const store=createStore(searchReducer);
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
