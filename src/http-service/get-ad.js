import { http } from "./http";
export const getAd = async () => {
  return http.get(`/kernel-api/ads/1/`);
};
