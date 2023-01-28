import { http } from "./http";
export const editAd = async (description) => {
  return http.patch(`/kernel-api/ads/1/`, {
    description,
  });
};
