import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IHomePageInfo } from "@/types/homePage";

// Define a type for the slice state
interface IHomePageSlice {
  objHomePageInfo: IHomePageInfo;
}

// Define the initial state using that type
const initialState: IHomePageSlice = {
  objHomePageInfo: {} as IHomePageInfo,
};

export const homePageSlice = createSlice({
  name: "homePage",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setObjHomePageInfo: (state, action: PayloadAction<any>) => {
      state.objHomePageInfo = action.payload;
    },
  },
});

export const { setObjHomePageInfo } = homePageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.homePageReducer;

export default homePageSlice.reducer;
