import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  isOpen: boolean;
}

const initialState: State = {
  isOpen: false,
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = accordionSlice.actions;

export const selectIsOpen = (state: RootState) => state.accordion.isOpen;

export default accordionSlice.reducer;
