import {LOAD_SEARCH, SET_BEER_LIST, SET_DEFAULT, SET_LOADING_STATE} from "../actions/action-types";

const initialState = {
    searchType: '',
    title: '',
    beerList: [],
    isLoading: true,
};

const searchReducer = function(state = initialState, action) {

    switch(action.type) {

        case LOAD_SEARCH:
            return Object.assign({}, state, {
                searchType: action.searchType,
                title: action.title
            });

        case SET_BEER_LIST:
            return {
                ...state,
                beerList: action.payload,
            };

        case SET_LOADING_STATE:
            return  {
                ...state,
                isLoading: action.payload,
            };

        case SET_DEFAULT:
            return initialState;

        default:
            break;

    }

    return state;

};

export default searchReducer;
