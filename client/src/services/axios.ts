import axios from "axios";

const BE_BASE_URL =  process.env.NEXT_PUBLIC_BE_BASE_URL;
const response = axios.create({
  baseURL: BE_BASE_URL,
});
response.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { response, BE_BASE_URL };
