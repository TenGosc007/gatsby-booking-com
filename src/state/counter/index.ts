import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
