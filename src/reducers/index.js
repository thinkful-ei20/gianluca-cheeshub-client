import { combineReducers } from 'redux';
import { cheeseReducer } from './cheese';

export default combineReducers(
	{
		cheeseReducer: cheeseReducer
	}
);