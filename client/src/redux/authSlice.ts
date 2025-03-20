import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserWithToken {
  access_token: string;
  refresh_token: string;
  user: User;
}
export interface User {
  id: string;
  google_id: string;
  profile_picture: string;
  name: string;
  email: string;
  phone: string;
  is_admin: boolean;
  address: Address;
  create_at: string;
}
interface Address {
  home_code: string;
  street: string;
  district: string;
  province: string;
  full_address: string;
}

interface AuthState {
  login: {
    currentUser: UserWithToken | null;
    isFetching: boolean;
    error: boolean;
  };
  register: {
    success: boolean;
    isFetching: boolean;
    error: boolean;
  };
}

const initialState: AuthState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  register: {
    success: false,
    isFetching: false,
    error: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<
        UserWithToken 
        //| { code?: number; data: UserWithToken }
      >
    ) => {
      // if ("data" in action.payload) {
      //   state.login.currentUser = action.payload.data;
      // } else {
        state.login.currentUser = action.payload;
      
      state.login.isFetching = false;
      state.login.error = false;
    },
    loginFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.currentUser = null;
      state.login.isFetching = false;
      state.login.error = false;
    },
    logOutFail: (state) => {
      state.login.error = true;
      state.login.isFetching = false;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.success = true;
      state.register.isFetching = false;
      state.register.error = false;
    },
    registerFail: (state) => {
      state.register.error = true;
      state.register.isFetching = false;
    },
    setUser: (state, action: PayloadAction<UserWithToken | null>) => {
      state.login.currentUser = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logOutStart,
  logOutSuccess,
  logOutFail,
  registerFail,
  registerStart,
  registerSuccess,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
