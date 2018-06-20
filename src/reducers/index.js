import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import ResultsReducer from './reducer_results';
import ResultsNextReducer from './reducer_results_next';
import ProductReducer from './reducer_product';

//setting up reducers and also Redux form reducer
const rootReducer = combineReducers({
	results: ResultsReducer,
	resultsNext: ResultsNextReducer,
	product: ProductReducer,
	form: fromReducer
});

export default rootReducer;