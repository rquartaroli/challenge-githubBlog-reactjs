import axios from 'axios';

const _baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL: _baseURL
});

export default api;