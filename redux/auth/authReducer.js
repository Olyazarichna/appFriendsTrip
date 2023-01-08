import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  nickname:null,
  stateChange:false,
  // email: null,
  // phone: null,
  // password: null,
  // repeatingPassword: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state,{payload}) => (
        { ...state, name: payload.name}
    ),
    updateUserProfile:(state, {payload})=>({
      ...state, userId: payload.userId,
    }),
    authStateChange:(state, {payload})=>({
...state,
stateChange:payload.stateChange,
    }),
    logout:()=>initialState,
  },
});
console.log('authSlice', authSlice);
export const {signUp, updateUserProfile,logout} = authSlice.actions;
export default authSlice.reducer;
