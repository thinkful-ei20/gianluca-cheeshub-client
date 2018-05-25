import {CHEESES_REQUEST, CHEESES_SUCCESS, CHEESES_ERROR} from '../actions/cheese';
const initialState = {
	cheeses: [],
	loading: false,
	error: null
};
export const cheeseReducer = (state=initialState, action) => {
	if (action.type === CHEESES_REQUEST) {
		console.log('fetching');
		return {
			...state,
			loading: action.loading
		};
	}
	if (action.type === CHEESES_SUCCESS) {
		console.log(action);
		return {
			...state,
			cheeses: action.cheeses,
			loading: action.loading,
			error: action.error
		};
	}
	if (action.type === CHEESES_ERROR) {
		return {
			...state,
			error: action.error,
			loading: action.loading
		};
	}
	return state;
};