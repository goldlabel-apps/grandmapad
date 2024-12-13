import config from "../config.json";
import { 
  IUberedux,
  KeyValueType,
  RootAppState,
} from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUberedux = {
  darkmode: config.defaultDark,
};

export const ubereduxSlice = createSlice({
  name: "uberedux",
  initialState,
  reducers: {
    setUbereduxKey: (state, action: PayloadAction<KeyValueType>) => {
      const { key, value } = action.payload;
      if (key in state) {
        (state as Record<string, unknown>)[key] = value;
      }
    },
  },
});

export const selectUberedux = (state: RootAppState) => state.uberedux;
export const selectDarkmode = (state: RootAppState) => state.uberedux.darkmode;
export const { setUbereduxKey } = ubereduxSlice.actions;
export default ubereduxSlice.reducer;
