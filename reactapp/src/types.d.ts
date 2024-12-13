/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ReactNode } from "react";
import { RootAppState, AppDispatch } from "./uberedux/store";

export interface IUberedux {
    darkmode: boolean;
}

export type RouteType = {
    slug?: string;
    icon?: string;
    label: string;
    children?: RouteType[];
};
 
export interface ThemeConfig {
    defaultDark: boolean;
    label: string;
    icon: string;
    primary: string;
    secondary: string;
    background: string;
    paper: string;
}
  
export type KeyValueType = {
    key: string;
    value: unknown;
};

export type {
    RootAppState,
    AppDispatch,
};
