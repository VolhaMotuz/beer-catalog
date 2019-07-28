import { SET_BEER_ITEM, SET_LOADING_STATE } from "../actions/action-types";

const initialState = {
    beerItem: [],
    isLoading: true,
};

const itemReducer = function(state = initialState, action) {

    switch(action.type) {

        case SET_BEER_ITEM:
            return {
                ...state,
                beerItem: action.payload,
            };

        case SET_LOADING_STATE:
            return  {
                ...state,
                isLoading: action.payload,
            };

        default:
            break;

    }

    return state;

};

export default itemReducer;
