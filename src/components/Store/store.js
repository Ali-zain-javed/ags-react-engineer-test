import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../Products/searchSlice";

export default configureStore({
  reducer: {
    Products: searchSlice,
  },
});
