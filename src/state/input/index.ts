import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  value: string;
}

const initialState: State = {
  value: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = "";
    },
  },
});

export const { setValue, clear } = inputSlice.actions;

export const selectValue = (state: RootState) => state.input.value;

export default inputSlice.reducer;
