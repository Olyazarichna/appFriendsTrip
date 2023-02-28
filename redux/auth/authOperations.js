import { async } from "@firebase/util";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";

import app from "../../firebase/config";
import { updateUserProfile, logout } from "./authReducer";

const auth = getAuth();
console.log("auth", auth);
export const signUp =
    ({ email, password, name, phone }) =>
        async (dispatch, getState) => {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(auth.currentUser);
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    // photoURL: "https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/"
                });
                const { uid } = await auth.currentUser;
                dispatch(updateUserProfile({ userId: uid, name: name, email, phone }));
            } catch (error) {
                alert("error", error.code, error.message);
            }
        };

export const logIn =
    ({ email, password }) =>
        async (dispatch, getState) => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
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

export const resetPassword = async ({ email }) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }
};
