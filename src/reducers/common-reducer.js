import { SET_LOADING_STATE } from "../actions/action-types";

const initialState = {
    isLoading: true
};

const commonReducer = function(state = initialState, action) {

    switch(action.type) {

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

export default commonReducer;
