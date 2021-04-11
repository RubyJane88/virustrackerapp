import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.quarantine.country/',
});

export default api;
