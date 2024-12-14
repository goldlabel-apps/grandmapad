import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";

export const setSubheader = (
  subheader: string,
) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "subheader", value: subheader }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
