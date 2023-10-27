import { configureStore } from "@reduxjs/toolkit";
import { homePageSlice } from "./features/homePage";

export const store = configureStore({
  reducer: {
    homePageReducer: homePageSlice as any,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
