import {
  KeyValueType,
  RootAppState,
} from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {initialState} from "../initialState";

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
export const selectUsers = (state: RootAppState) => state.uberedux.users;
export const selectUserSlug = (state: RootAppState) => state.uberedux.userSlug;
export const selectTitle = (state: RootAppState) => state.uberedux.title;
export const selectSubheader = (state: RootAppState) => state.uberedux.subheader;
export const selectConfig = (state: RootAppState) => state.uberedux.config;

export const { setUbereduxKey } = ubereduxSlice.actions;
export default ubereduxSlice.reducer;
