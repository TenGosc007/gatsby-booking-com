import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface State {
  isShow: boolean;
  activeNum: number;
}

const initialState: State = {
  isShow: false,
  activeNum: 0,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isShow = !state.isShow;
    },
    setNum: (state, action) => {
      state.activeNum = action.payload;
    },
  },
});

export const { toggle, setNum } = headerSlice.actions;

export const selectIsShow = (state: RootState) => state.header.isShow;
export const selectActiveNum = (state: RootState) => state.header.activeNum;

export default headerSlice.reducer;
