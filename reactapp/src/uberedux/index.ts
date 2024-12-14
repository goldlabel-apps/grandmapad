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
} from "./reducer";
import { setUserSlug } from "./actions/setUserSlug";
import { setSubheader } from "./actions/setSubheader";


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
};
