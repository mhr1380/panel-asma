import { http } from "./http";
export const isAdded = async (id, is_added) => {
  return http.patch(`/word-api/new-words/${id}/`, {
    is_added,
  });
};
