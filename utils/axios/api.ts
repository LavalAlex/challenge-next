import axios from "axios";
import { API_URL } from "@/config";

const _Api = axios.create({
  baseURL: API_URL,
});

_Api.interceptors.request.use((req) => {
  console.debug(`[AXIOS]: Fetching to ${req.url}`);
  return req;
});

_Api.interceptors.response.use((res) => {
  console.debug(
    `[AXIOS]: Fetching to ${res.config.url} ended with status ${res.status}`
  );
  return res;
});

export default _Api;
