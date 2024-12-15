import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setTitle = (
  title: string,
) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "title", value: title }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};