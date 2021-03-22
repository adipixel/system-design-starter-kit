import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getWineTypes } from "../../api/wines/get-wine-types.api";

export const wineBoardSlice = createSlice({
  name: "wineBoard",
  initialState: {
    value: 0,
    wineTypes: [],
  },
  reducers: {
    setValue: (state, action) => {
      const { value } = action.payload;
      state.value = value;
    },
    setWineTypes: (state, action) => {
      const { wineTypes } = action.payload;
      state.wineTypes = wineTypes;
    },
  },
});

export const {
  setValue: setValueAction,
  setWineTypes: setWineTypesAction,
} = wineBoardSlice.actions;

// Async action (uses redux-thunk)
export const loadWineTypesAction = () => (dispatch: Dispatch<any>) => {
  getWineTypes()
    .then((wineTypes) => {
      dispatch(setWineTypesAction({ wineTypes }));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const valueSelector = (state: any) => state.wineBoard.value;
export const wineTypesSelector = (state: any) => state.wineBoard.wineTypes;

export default wineBoardSlice.reducer;
