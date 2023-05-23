import axios from 'axios';

const BASEURL = 'http://localhost:4001';

export const instance = axios.create({
  baseURL: BASEURL,
});
