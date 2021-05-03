import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.email || null,
  password: localStorage.password || null,
  isAuth: JSON.parse(localStorage.isAuth || false),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.email = localStorage.email = action.payload.email;
      state.password = localStorage.password = action.payload.password;
      state.isAuth = Boolean((localStorage.isAuth = "true"));
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isAuth = false;
      localStorage.clear();
    },
  },
});

export const { auth, logout } = authSlice.actions;

export const isAuth = (state) => state.auth.isAuth;

export default authSlice.reducer;
