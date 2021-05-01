import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null || localStorage.email,
  password: null || localStorage.password,
  isAuth: JSON.parse(localStorage.isAuth),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.email = localStorage.email = action.payload.email;
      state.password = localStorage.password = action.payload.password;
      state.isAuth = localStorage.isAuth = true;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isAuth = localStorage.isAuth = false;
    },
  },
});

export const { auth, logout } = authSlice.actions;

export const isAuth = (state) => state.auth.isAuth;

export default authSlice.reducer;
