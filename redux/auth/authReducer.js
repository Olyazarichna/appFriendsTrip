import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  email: null,
  phone: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
      isLoggedIn: true,
    }),
    logout: (state) => ({ ...initialState }),
  },
});

export const { updateUserProfile, logout } = authSlice.actions;

export default authSlice.reducer;
