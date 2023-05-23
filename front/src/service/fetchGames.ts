import { instance } from './makeReq';

const endpoint = '/games';

export const videogames = {
  getAll: function () {
    return instance.get(endpoint, {});
  },
  getById: function ({ id }: { id: number }) {
    return instance.get(`${endpoint}/${id}`);
  },
};
