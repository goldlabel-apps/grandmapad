import { 
  configureStore, 
  ThunkAction, 
  Action,
} from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
  reducer: {
    uberedux: reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootAppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootAppState,
  unknown,
  Action<string>
>;
