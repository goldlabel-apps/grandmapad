import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const authSignOut = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "authing", value: true }));
      await signOut(auth);
      dispatch(setUbereduxKey({ key: "user", value: null }));
      window.open("/", "_self");
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