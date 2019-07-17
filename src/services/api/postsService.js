import httpClient from './httpClient';

export function apiGetPosts() {
    return httpClient.get('/everything', {
        params: {
            q: 'bitcoin',
            from: '2019-06-27',
            sortBy: 'publishedAt',
        }
    });

}
