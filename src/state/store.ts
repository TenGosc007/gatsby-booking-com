import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import accordion from "./accordion";
import header from "./header";
import input from "./input";
import counter from "./counter";

const store = configureStore({
  reducer: {
    accordion,
    header,
    input,
    counter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
