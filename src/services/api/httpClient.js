import { BASE_API_URL, API_KEY } from '../../globals';
import axios from 'axios';

const instance = axios.create({
    baseURL: BASE_API_URL,
});

instance.interceptors.request.use(function (config) {
    if (!config.params) {
        config.params = {};
    }

    config.params.apiKey = API_KEY;

    return config;
});

export default instance;
