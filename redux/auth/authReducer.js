import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  name: null,
  email: null,
  phone: null,
  password: null,
  repeatingPassword: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, { payload }) => ({ ...state, name: payload.name }),
  },
});
console.log('authSlice', authSlice);
export const { signUp } = authSlice.actions;
export default authSlice.reducer;
