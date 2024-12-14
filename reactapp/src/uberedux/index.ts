import { store } from "./store";
import Uberedux from "./Uberedux";
import {
  useUbereduxDispatch,
  useUbereduxSelect,
} from "./hooks";
import {
  setUbereduxKey,
  selectUberedux,
  selectUserSlug,
  selectUsers,
  selectSubheader,
  selectConfig,
  selectTitle,
} from "./reducer";
import { setUserSlug } from "./actions/setUserSlug";
import { setSubheader } from "./actions/setSubheader";
import { setTitle } from "./actions/setTitle";

export {
  Uberedux,
  store,
  setUbereduxKey,
  useUbereduxDispatch,
  useUbereduxSelect,
  selectUberedux,
  selectUserSlug,
  selectUsers,
  selectSubheader,
  selectConfig,
  setSubheader,
  setUserSlug,
  selectTitle,
  setTitle,
};
