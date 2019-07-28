import { SET_LOADING_STATE } from '../actions/action-types';

export function setLoading(isLoading = true) {
    return {
        type: SET_LOADING_STATE,
        payload: isLoading,
    };
}
