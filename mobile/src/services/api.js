import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.11.3.201:3333'
});

export default api;