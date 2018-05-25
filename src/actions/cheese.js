import { API_BASE_URL } from '../config';

export const CHEESES_SUCCESS = 'CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
	type: CHEESES_SUCCESS,
	loading: false,
	error: null,
	cheeses
});

export const CHEESES_ERROR = 'CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
	type: CHEESES_ERROR,
	loading: false,
	error
});

export const CHEESES_REQUEST = 'CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: CHEESES_REQUEST,
	loading: true
});

export const fetchCheeses = () => dispatch => {
	dispatch(fetchCheesesRequest());
	return ( fetch(`${API_BASE_URL}/cheeses`).then(res => {
		if(!res.ok) {
			console.log('not okay');
			throw new Error(res.statusText);
		}
		return res.json();
	}).then(cheeses => {
		dispatch(fetchCheesesSuccess(cheeses));
	}).catch(err =>
		dispatch(fetchCheesesError(err)))
	);
};
