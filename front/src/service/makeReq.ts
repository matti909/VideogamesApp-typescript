import axios from 'axios';

const BASEURL = 'http://localhost:5000';

export const instance = axios.create({
  baseURL: BASEURL,
});
