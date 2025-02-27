import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("Token"), // Token hai to true, warna false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("Token", action.payload); // Token store karo
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("Token"); // Token remove karo
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
