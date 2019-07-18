import * as types from '../actions/action-types';

const initialState = {
    searchType: '',
    title: ''
};

const searchReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.LOAD_SEARCH:
            return Object.assign({}, state, {
                searchType: action.searchType,
                title: action.title
            });

    }

    return state;

}

export default searchReducer;
