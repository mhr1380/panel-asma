import { http } from "./http";
export const getRequests = async (filter) => {
  const filterValue =
    filter === "حروف الفبا"
      ? ""
      : filter === "تعداد درخواست"
      ? ""
      : filter === "جدیدترین"
      ? "?ordering=-date"
      : filter === "قدیمی ترین"
      ? "?ordering=date"
      : filter === "اضافه شده"
      ? "?is_added=true"
      : filter === "اضافه نشده"
      ? "?is_added=false"
      : "";
  return http.get(`/word-api/new-words/${filterValue}`);
};
