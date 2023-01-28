import { http } from "./http";
export const getFactures = async (from, to) => {
  if (from === undefined || to === undefined)
    return http.get(`/kernel-api/factures/`);
  return http.get(`/kernel-api/factures/?date__range=${from},${to}`);
};
