/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from "../../types";
import { setUbereduxKey } from "../";


export const setDarkmode =
  (
    darkmode: boolean,
  ): any =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setUbereduxKey({ key: "darkmode", value: darkmode }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch(setUbereduxKey({ key: "error", value: e.message }));
      } else {
        dispatch(setUbereduxKey({ key: "error", value: String(e) }));
      }
    }
};
