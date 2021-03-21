import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isAuth: JSON.parse(localStorage.isAuth),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = localStorage.isAuth = JSON.stringify(true);
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isAuth = localStorage.isAuth = JSON.stringify(false);
    },
  },
});

export const { auth, logout } = authSlice.actions;
export default authSlice.reducer;
