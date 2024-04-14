import axios from 'axios';
const url = '/api';
export const autoFetch = axios.create({
  baseURL: url,
});
