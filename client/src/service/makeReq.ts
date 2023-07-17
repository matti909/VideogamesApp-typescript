import axios from "axios";

//const BASEURL = "https://api2-nolur3z3hq-uc.a.run.app";
const BASEURL = "http://localhost:4002";

export const instance = axios.create({
  baseURL: BASEURL,
});
