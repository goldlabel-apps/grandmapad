// import { ReactNode } from "react";
import { RootAppState, AppDispatch } from "./uberedux/store";

export interface IApp {
  id: string;
  children?: React.ReactNode;
}

export interface IUberedux {
    config: any;
    authState: any;
    subheader: string;
    userSlug: string | null;
    users: UserType[] | null;
    error: any;
}

export type UserType = {
    uid: string;
    email: string;
    nickname: string;
    slug: string;
    role: string;
    avatar: string;
};

export interface IHero {
  id: string;
  options?: {
    avatar?: string;
    title?: string;
    subheader?: string;
  };
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
