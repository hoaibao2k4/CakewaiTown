import axios, { AxiosInstance, AxiosResponse } from "axios";
import { response } from "~/services/axios";

export interface User {
  id?: string;
  name: string;
  email: string;
  phone: string;
}
export const updateUser = async (
  token: string,
  user: User,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.put(`/api/protected/user/${user.id}`, user, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Update Ok");
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};
export const getCurrentUser = async (
  instance: AxiosInstance,
  token: string
) => {
  try {
    const res = await instance.get("/api/protected/user/current_user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const updateImageUser = async (
  instance: AxiosInstance,
  token: string,
  file: File
): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await instance.post("/api/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const requestPasswordUser = async (email: string) => {
  try {
    const res: AxiosResponse = await response.post(
      "/api/public/request-password-reset",
      { email: email }
    );
    return res.statusText;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const changePasswordUser = async (
  instance: AxiosInstance,
  token: string,
  data: string
) => {
  try {
    const res: AxiosResponse = await instance.post(
      "/api/protected/account-recover/update-password",
      data,
      {
        headers: { Authorization: `Bearer: ${token}` },
      }
    );
    return res.statusText;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const getListUsers = async (token: string, instance: AxiosInstance) => {
  try {
    const res: AxiosResponse = await instance.get("/api/protected/user/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Response từ API:", res.data);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const deleteUsers = async (
  token: string,
  id: string,
  instance: AxiosInstance
) => {
  try {
    const res = await instance.delete(`/api/protected/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Xóa thành công:", res.data);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error(
        err.response?.data || err.message,
        err.response?.status || "No status"
      );
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};
