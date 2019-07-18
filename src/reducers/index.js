import {combineReducers} from 'redux';
import searchReducer from './search-reducer';

const reducers = combineReducers({
    searchState: searchReducer
});

export default reducers;
