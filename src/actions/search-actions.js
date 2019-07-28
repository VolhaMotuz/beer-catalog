import { SET_BEER_LIST, SET_DEFAULT } from '../actions/action-types';
import { apiPostBeerList } from './../services/api/postsService';
import { setLoading } from "./common-actions";

export function loadBeer(filterParams = {}) {
    return (dispatch) => {
        dispatch(setLoading());
        return apiPostBeerList(filterParams)
            .then(res => {
                dispatch(setBeerList(res.data));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
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

export function setDefault() {
    return {
        type: SET_DEFAULT,
    };
}
