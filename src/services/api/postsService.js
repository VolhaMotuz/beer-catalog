import httpClient from './httpClient';

/*export function apiGetPosts() {
    return httpClient.get('/everything', {
        params: {
            q: 'bitcoin',
            from: '2019-06-27',
            sortBy: 'publishedAt',
        }
    });

}*/

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
