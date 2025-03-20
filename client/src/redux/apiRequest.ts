import {
  loginFail,
  loginStart,
  loginSuccess,
  logOutFail,
  logOutStart,
  logOutSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { response } from "~/services/axios";
import { toast } from "react-toastify";
import { AppDispatch } from "./store";
import axios from "axios";
import { NextRouter } from "next/router";
import { User } from "./authSlice";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface UserAuth {
  name?: string,
  email: string,
  password: string
}
export const loginUser = async (
  dispatch: AppDispatch,
  user: UserAuth,
  expectedRole: boolean,
  navigate: AppRouterInstance,
  redirectPath = "/"
) => {
  dispatch(loginStart());
  try {
    const res = await response.post("/api/public/login", user);
    const role = res.data.user.is_admin;
    if (expectedRole === role || role) {
      toast.success("Đăng nhập thành công", {
        position: "bottom-right",
      });
      dispatch(loginSuccess(res));
      navigate(redirectPath);
    } else {
      toast.error("Truy cập bị từ chối", {
        position: "bottom-right",
      });
    }
  } catch (err: unknown) {
    dispatch(loginFail());
    if (axios.isAxiosError(err)) {
      if (err.response) {
        if (err.response.status === 500) {
          toast.error("Tài khoản chưa được đăng ký", {
            position: "bottom-right",
          });
        } else if (err.response.status === 401) {
          toast.error("Sai mật khẩu", {
            position: "bottom-right",
          });
        }
      }
    } else if (err instanceof Error) {
      console.error("Request Err: ", err.message);
    } else console.error("Unknown err: ", err);
  }
};

export const logOutUser = async (
  dispatch: AppDispatch,
  token: string,
  navigate: NextRouter["push"],
  redirectPath = "/auth?mode=signin"
) => {
  dispatch(logOutStart());
  try {
    await response.post("/api/public/logout", { refresh_token: token });
    dispatch(logOutSuccess());
    navigate(redirectPath);
  } catch (err: unknown) {
    dispatch(logOutFail());
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

export const registerUser = async (
  dispatch: AppDispatch,
  user: UserAuth,
  router: AppRouterInstance
) => {
  dispatch(registerStart());
  try {
    await response.post("/api/public/signup", user);
    dispatch(registerSuccess());
    toast.success("Đăng kí thành công", {
      position: "bottom-right",
    });
    router.push("/auth?mode=signin")
  } catch (err: unknown) {
    dispatch(registerFail());
    if (axios.isAxiosError(err)) {
      if (err.response) {
        if (err.response.status === 400) {
          toast.error("Tài khoản đã tồn tại", {
            position: "bottom-right",
          });
        } else if (err.response.status === 401) {
          toast.error("Sai mật khẩu", {
            position: "bottom-right",
          });
        }
      }
    } else if (err instanceof Error)
      console.error("Request err: ", err.message);
    else console.log("Unknown: ", err);
  }
};

export const googleLoginUser = async (
  dispatch: AppDispatch,
  refToken: string,
  token: string
) => {
  dispatch(loginStart());
  try {
    const res = await response.get("/api/protected/user/current_user", {
      headers: { Authorization: `Bearer ${refToken}` },
    });
    const data = {
      user: res.data,
      refresh_token: refToken,
      access_token: token,
    };
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (err: unknown) {
    dispatch(loginFail());
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

export const renewToken = async (token: string) => {
  try {
    const res = await response.post("/api/public/renew_access", {
      refresh_token: token,
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

export const refreshToken = async (token: string) => {
  try {
    const res = await response.post("/api/public/renew_refresh", {
      refresh_token: token,
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
