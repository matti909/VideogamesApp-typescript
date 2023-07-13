import axios from "axios";

const BASEURL = "https://api2-nolur3z3hq-uc.a.run.app";

export const instance = axios.create({
  baseURL: BASEURL,
});
