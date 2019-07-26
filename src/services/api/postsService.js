import httpClient from './httpClient';

export function apiPostBeerList(filterParams = {}) {
    let params = {};

    if (filterParams.name) {
        params.beer_name = filterParams.name;
    }
    if (filterParams.abv) {
        params.abv_lt = filterParams.abv;
    }
    if (filterParams.ibu) {
        params.ibu_lt = filterParams.ibu;
    }
    if (filterParams.ebc) {
        params.ebc_lt = filterParams.ebc;
    }
    if (filterParams.pageNumber) {
        params.page = filterParams.pageNumber;
    }
    if (filterParams.pageAmount) {
        params.per_page = filterParams.pageAmount;
    }

    return httpClient.get('/beers',{
        params: params,
    });
}

export function apiGetBeerItem(id) {
    return httpClient.get('/beers/' + id);
}
