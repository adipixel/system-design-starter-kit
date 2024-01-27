import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeName: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeName = state.themeName === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme: toggleThemeAction } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.app.themeName)`
export const themeNameSelector = (state: any) => state.app.themeName;

export default appSlice.reducer;
