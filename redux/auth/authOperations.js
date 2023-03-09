import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,
    updateProfile,
    deleteUser,
} from "firebase/auth";

import app from "../../firebase/config";
import { updateUserProfile, logout } from "./authReducer";
import Toast from "react-native-root-toast";

const auth = getAuth();

import { addDoc, doc, setDoc } from 'firebase/firestore';

import { auth, usersRef } from '../../firebase/config';

console.log('auth', auth);

export const signUp =
    ({ email, password, name, phone }) =>
        async (dispatch, getState) => {
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await sendEmailVerification(user);
                await updateProfile(user, {
                    displayName: name,
                    phoneNumber: phone,
                    // photoURL: "https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/"
                });
                const newUser = {
                    userId: user.uid,
                    name,
                    email,
                    phone,
                };
                const userDocRef = doc(usersRef, user.uid);
                await setDoc(userDocRef, newUser);
                dispatch(updateUserProfile(newUser));
            } catch (error) {
                alert('error', error.code, error.message);
            }
        };

export const logIn =
    ({ email, password }) =>
        async (dispatch, getState) => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("auth", auth);
                dispatch(
                    updateUserProfile({
                        userId: auth.currentUser.uid,
                        name: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                    })
                );
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                Toast.show("Invalid email or password", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    backgroundColor: "#EE0A37",
                    textColor: "#fff",
                    hideOnPress: true,
                });
            }
        };

export const logOut = () => async (dispatch, getState) => {
    try {
        await signOut(auth);
        dispatch(logout());
    } catch (error) {
        console.log('error', error.message);
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

export const deleteUserProfile = async () => {
    try {
        const user = auth.currentUser;
        await deleteUser(user);
    } catch (error) {
        alert("delete", error);
    }
};