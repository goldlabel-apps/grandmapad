import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const authSignIn = (
  // email: string = "grandma@grandma-pad.com",
  password: string,
) => async (dispatch: AppDispatch) => {
    try {
      const email = "christopher@grandma-pad.com";
      dispatch(setUbereduxKey({ key: "authing", value: true }));
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    } finally {
      dispatch(setUbereduxKey({ key: "authing", value: false }));
    }
};