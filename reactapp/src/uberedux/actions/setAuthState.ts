import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setAuthState = (
    authState: any,
) => async (dispatch: AppDispatch) => {
    try {
      // console.log("setAuthState", authState);
      dispatch(setUbereduxKey({ key: "authState", value: authState }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
