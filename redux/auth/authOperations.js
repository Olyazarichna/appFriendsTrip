import { async } from "@firebase/util";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification
} from "firebase/auth";

import app from "../../firebase/config";
import { updateUserProfile, logout } from "./authReducer";

const auth = getAuth();
console.log("auth", auth);
export const signUp =
    ({ name, email, password }) =>
        async (dispatch, getState) => {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password, name);
                console.log('auth.currentUser', auth.currentUser);
                sendEmailVerification(auth.currentUser);
                console.log("userRegistration", user);
                dispatch(updateUserProfile({ userId: user.uid, name: user.displayName }));
            } catch (error) {
                console.log("error", error.message);
            }
        };

export const logIn =
    ({ email, password }) =>
        async (dispatch, getState) => {
            try {
                const signIn = await signInWithEmailAndPassword(auth, email, password);
                console.log("s", signIn);
                console.log("auth2", auth);
                dispatch(updateUserProfile());
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
            }
        };

export const logOut = () => async (dispatch, getState) => {
    try {
        await signOut(auth);
        dispatch(logout());
    } catch (error) {
        console.log("error", error.message);
    }
};

export const resetPassword =
    () =>
        async (dispatch, getState) => {
            try {
                await sendPasswordResetEmail(auth, email);
                console.log('trololo', auth)
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
            };
        };

