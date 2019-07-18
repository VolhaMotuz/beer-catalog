import * as types from '../actions/action-types';

export function loadSearch(searchType, title) {
    return {
        type: types.LOAD_SEARCH,
        searchType,
        title
    };
}
