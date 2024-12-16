import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setAuthUid = (
  authUid: string | null,
) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "authUid", value: authUid }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
