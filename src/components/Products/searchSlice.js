import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { Products: [], filterData: [], filterType: null },
  reducers: {
    findProduct: (state, action) => {
      state.filterData = action.payload&&action.payload.product;
      state.filterType = action.payload&&action.payload.type;
    },
    setProducts: (state, action) => {
      state.Products = action.payload
    },
  },
});
export const { findProduct,setProducts } = searchSlice.actions;
export default searchSlice.reducer;
