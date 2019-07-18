import {LOAD_SEARCH, SET_BEER_LIST, SET_DEFAULT, SET_LOADING_STATE} from '../actions/action-types';
import { apiPostBeerName } from './../services/api/postsService';

export function loadSearch(searchType, title) {
    return {
        type: LOAD_SEARCH,
        searchType,
        title
    };
}

export function loadBeer(name=null) {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(setLoading());
        return apiPostBeerName(name)
            .then(res => {
                dispatch(setBeerList(res.data));
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
            ;
    };
}

/**
 *
 * @param data
 *
 * @returns {{payload: *, type: string}}
 */
export function setBeerList(data) {
    return {
        type: SET_BEER_LIST,
        payload: data,
    };
}

export function setLoading(isLoading = true) {
    return {
        type: SET_LOADING_STATE,
        payload: isLoading,
    };
}

export function setDefault() {
    return {
        type: SET_DEFAULT,
    };
}