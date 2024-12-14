import config from "./config.json";
import { IUberedux } from "./types";
import {users} from "./users";

export const initialState: IUberedux = {
    title: "grandmaPad",
    subheader: "Who are you?",
    error: null,
    config,
    authState: null,
    users,
    userSlug: null,
};
