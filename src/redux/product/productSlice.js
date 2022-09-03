import { createSlice } from "@reduxjs/toolkit";

import { getProductTitleAsync, getProductVariantsAsync, selectableAttributesAsync } from '../../api/requests/index';

const initialState = {
  title: "",
  images: [],
  color: [],
  size: [],
  button: true
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductTitleAsync.fulfilled]: (state, action) => {
      state.title = action.payload.data[0];
    },

    [getProductVariantsAsync.fulfilled]: (state, action) => {
      state.images = action.payload.data[0].images;
    },

    [selectableAttributesAsync.fulfilled]: (state, action) => {
      state.color = action.payload.data[0];
      state.size = action.payload.data[1];
    }
  },
});

export default productSlice.reducer;