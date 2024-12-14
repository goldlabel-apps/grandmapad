import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setUserSlug = (
    userSlug: string,
) => async (dispatch: AppDispatch) => {
    try {
      console.log("setUserSlug", userSlug)
      dispatch(setUbereduxKey({ key: "userSlug", value: userSlug }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
