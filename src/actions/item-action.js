import { SET_BEER_ITEM } from '../actions/action-types';
import { apiGetBeerItem } from './../services/api/postsService';
import { setLoading } from "./common-actions";

export function loadBeerItem(id) {
    return (dispatch) => {
        dispatch(setLoading());
        return apiGetBeerItem(id)
            .then(res => {
                dispatch(setBeerItem(res.data));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };
}

export function setBeerItem(data) {
    return {
        type: SET_BEER_ITEM,
        payload: data,
    };
}
