import { store } from "./store";
import Uberedux from "./Uberedux";
import {
  useUbereduxDispatch,
  useUbereduxSelect,
} from "./hooks";
import {
  setUbereduxKey,
  selectUberedux,
  selectUser,
  selectUsers,
  selectSubheader,
  selectConfig,
  selectTitle,
  selectAuthState,
  selectAuthing,
} from "./reducer";
import { setUser } from "./actions/setUser";
import { setSubheader } from "./actions/setSubheader";
import { setTitle } from "./actions/setTitle";
import { setAuthState } from "./actions/setAuthState";
import { authSignIn } from "./actions/authSignIn";
import { authSignOut } from "./actions/authSignOut";

export {
  Uberedux,
  store,
  setUbereduxKey,
  useUbereduxDispatch,
  useUbereduxSelect,
  selectUberedux,
  selectUser,
  selectUsers,
  selectSubheader,
  selectConfig,
  setSubheader,
  setUser,
  selectTitle,
  setTitle,
  setAuthState,
  selectAuthState,
  selectAuthing,
  authSignIn,
  authSignOut,
};
