import axios from "axios";

export const BASEURL = "https://games-e8uu.onrender.com";
//const BASEURL = "http://localhost:4002";

export const instance = axios.create({
  baseURL: BASEURL,
});
