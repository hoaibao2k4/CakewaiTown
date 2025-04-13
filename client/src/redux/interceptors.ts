import { jwtDecode } from "jwt-decode";
import { refreshToken, renewToken } from "./apiRequest";
import { AppDispatch } from "./store";
import { UserWithToken } from "~/types";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { BE_BASE_URL } from '~/services/axios';

interface JwtPayload {
  exp?: number;
}

export const createInstance = (
  user: UserWithToken,
  dispatch: AppDispatch,
  stateAuth: (payload: UserWithToken) => PayloadAction<UserWithToken>
) => {
  const newInstance = axios.create({
    baseURL: BE_BASE_URL
  });

  // Interceptor cho request
  newInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const date = new Date();
      const currentTime = date.getTime() / 1000;

      // Decode tokens với kiểu JwtPayload
      const decodedToken = jwtDecode<JwtPayload>(user.access_token);
      const decodedRefresh = jwtDecode<JwtPayload>(user.refresh_token);
      console.log("Before checking");
      // Kiểm tra nếu refresh token sắp hết hạn (còn dưới 60 giây)
      if (decodedRefresh.exp && decodedRefresh.exp < currentTime + 60) {
        try {
          console.log("After checking");
          const res = await refreshToken(user.refresh_token);
          const refreshUser: UserWithToken = {
            ...user,
            access_token: res.access_token,
            refresh_token: res.refresh_token,
          };
          dispatch(stateAuth(refreshUser));
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${res.access_token}`;
        } catch (error) {
          // Xử lý đăng xuất hoặc thông báo lỗi
          return Promise.reject(error);
        }
      }
      // Kiểm tra nếu access token đã hết hạn
      else if (decodedToken.exp && decodedToken.exp < currentTime) {
        try {
          const data = await renewToken(user.refresh_token);
          const refreshUser: UserWithToken = {
            ...user,
            access_token: data.access_token,
          };
          dispatch(stateAuth(refreshUser));
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${data.access_token}`;
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  // Interceptor cho response
  newInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("Response", response.data)
      return response.data
    },
    (error: AxiosError) => {
      if (error.response) {
        console.error("Response Error: ", error.response?.data);
        console.error("Error Status: ", error.response?.status);
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    }
  );

  return newInstance;
};
