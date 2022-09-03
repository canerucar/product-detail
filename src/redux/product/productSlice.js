import { createSlice } from "@reduxjs/toolkit";

import { getProductTitleAsync, getProductVariantsAsync, selectableAttributesAsync } from '../../api/requests/index';

const initialState = {
  title: "",
  images: [],
  color: [],
  size: [],
  button: true,
  selectColor: "",
  selectSize: "",
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleColor: (state, action) => {
      state.selectColor = action.payload;
      if (state.selectColor && state.selectSize) {
        state.button = false;
      }
    },
    handleSize: (state, action) => {
      state.selectSize = action.payload;
      if (state.selectColor && state.selectSize) {
        state.button = false;
      }
    }
  },
  extraReducers: {
    [getProductTitleAsync.fulfilled]: (state, action) => {
      state.title = action.payload.data[0];
    },

    [getProductVariantsAsync.fulfilled]: (state, action) => {
      if (action.meta.arg == "Siyah") {
        state.images = action.payload.data[0].images;
      } else {
        state.images = action.payload.data[1].images;
      }
    },

    [selectableAttributesAsync.fulfilled]: (state, action) => {
      state.color = action.payload.data[0];
      state.size = action.payload.data[1];
    }
  },
});

export const { handleColor, handleSize } = productSlice.actions;
export default productSlice.reducer;