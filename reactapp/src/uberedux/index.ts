import { store } from "./store";
import Uberedux from "./Uberedux";
import {
  useUbereduxDispatch,
  useUbereduxSelect,
} from "./hooks";
import {
  setUbereduxKey,
  selectUberedux,
  selectDarkmode,
} from "./reducer";
import { setDarkmode } from "./actions/setDarkmode";

export {
  Uberedux,
  store,
  setUbereduxKey,
  useUbereduxDispatch,
  useUbereduxSelect,
  selectUberedux,
  selectDarkmode,
  setDarkmode,
};
