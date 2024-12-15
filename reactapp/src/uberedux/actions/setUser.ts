import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setUser = (
    user: any,
) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "user", value: user }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
