import { combineReducers } from 'redux';
import commonReducer from './common-reducer';
import searchReducer from './search-reducer';
import itemReducer from './item-reducer';

const reducers = combineReducers({
    commonState: commonReducer,
    searchState: searchReducer,
    itemState: itemReducer
});

export default reducers;
