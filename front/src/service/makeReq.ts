import axios from 'axios';

const BASEURL = 'http://localhost:4002';

export const instance = axios.create({
  baseURL: BASEURL,
});
