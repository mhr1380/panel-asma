import { http } from "./http";
export const getSpecRequest = async (id) => {
  return http.get(`/word-api/new-words/${id}/`);
};
