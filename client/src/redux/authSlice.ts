import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  access_token: string;
  refresh_token: string;
}

interface AuthState {
  login: {
    currentUser: User | null;
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
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<User | { code?: number; data: User }>) => {
      if ("data" in action.payload) {
        state.login.currentUser = action.payload.data;
      } else {
        state.login.currentUser = action.payload;
      }
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
    setUser: (state, action: PayloadAction<User | null>) => {
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
