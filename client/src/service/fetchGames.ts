import { instance } from "./makeReq";

const endpoint1 = "/games";
const endpoint2 = "/genres";

export const videogames = {
  getAll: function () {
    return instance.get(endpoint1, {});
  },
  getById: function ({ id }: { id: number }) {
    return instance.get(`${endpoint1}/${id}`);
  },
  getCategory: function () {
    return instance.get(endpoint2, {});
  },
};
