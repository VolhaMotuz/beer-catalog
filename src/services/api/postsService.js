import httpClient from './httpClient';

export function apiPostBeerList(name, abv, ibu, ebc) {
    let params = {};

    if (name) {
        params.beer_name = name;
    }
    if (abv) {
        params.abv = abv;
    }
    if (ibu) {
        params.ibu = ibu;
    }
    if (ebc) {
        params.ebc = ebc;
    }

    return httpClient.get('/beers',{
        params: params,
    });
}

export function apiGetBeerItem(id) {
    return httpClient.get('/beers/' + id);
}
