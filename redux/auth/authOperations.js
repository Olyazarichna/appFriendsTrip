import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/config";
// console.log('DB',app);

const auth = getAuth();

export const signUp =
  ({ name, email, phone, password, repeatingPassword }) =>
  async (dispatch, getState) => {
    console.log(name, email, phone, password, repeatingPassword);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log("user", user);
    } catch (error){
      console.log("errorM", error.message);
    }
  };
