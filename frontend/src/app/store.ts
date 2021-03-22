import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./app.slice";
import wineBoardReducer from "../features/wine-board/wine-board.slice";

export default configureStore({
  reducer: {
    app: appReducer,
    wineBoard: wineBoardReducer,
  },
});
