import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0OTY2OTkyLCJqdGkiOiIzNmIwMjUxNDFjZDg0M2ViYjBhMDdlZjk3MzNkNzkyNyIsInVzZXJfaWQiOjF9.MbUt1p1NnbVJEkTYroP1c5VGWILDaC5Hc8v-YqsfUVM`;

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
