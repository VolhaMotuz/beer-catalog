import httpClient from './httpClient';

export function apiGetPosts() {
    return httpClient.get('/beers');
}

export function apiPostBeerName(name) {
    let params = {};
    if (name) {
        params.beer_name = name;
    }

    return httpClient.get('/beers',{
        params: params,
    });
}

export function apiGetBeerItem(id) {
    return httpClient.get('/beers/' + id);
}
