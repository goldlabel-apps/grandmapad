import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootAppState, AppDispatch } from "../types";

export const useUbereduxDispatch = () => useDispatch<AppDispatch>();
export const useUbereduxSelect: TypedUseSelectorHook<RootAppState> = useSelector;
