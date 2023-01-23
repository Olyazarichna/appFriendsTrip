import { async } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/config";
import { updateUserProfile, logout } from "./authReducer";

const auth = getAuth();

export const signUp =
    ({ name, email, password }) =>
        async (dispatch, getState) => {

            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);

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
                dispatch(updateUserProfile())

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