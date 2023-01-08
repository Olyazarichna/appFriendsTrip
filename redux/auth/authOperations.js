import { async } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/config";
import { updateUserProfile, logout } from "./authReducer";

const auth = getAuth();

export const signUp =
  ({ name, email, phone, password, repeatingPassword }) =>
  async (dispatch, getState) => {
    console.log(name, email, phone, password, repeatingPassword);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("15auth", auth);

      dispatch(updateUserProfile({ userId: user.uid, name: user.displayName }));
    } catch (error) {
      console.log("error", error.message);
    }
  };
export const logIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("isUser", user);
      //  .then((userCredential) => {
      // Signed in
      // const user = await userCredential.user;
      // console.log('user26', user);
      // ...
      //   })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

export const signOut = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    console.log("Sign-out successful.");
    dispatch(logout());
  } catch (error) {
    console.log("error", error.message);
  }
};
