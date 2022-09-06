import { createSlice } from "@reduxjs/toolkit";

import { getProductTitleAsync, getProductVariantsAsync, selectableAttributesAsync } from '../../api/requests/index';

const initialState = {
  title: "",
  items: [],
  color: [],
  size: [],
  button: true,
  selectColor: "",
  selectSize: "",
  itemsSelectedSize: [],
  productImages: [],
  modal: false,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleSize: (state, action) => {
      state.selectSize = action.payload;
      if (state.selectSize) {
        state.button = false;
      }
    },
    handleSelect: (state, action) => {
      state.selectColor = action.payload;
      const filtered = state.items.filter(item => item.attributes[1].value === action.payload)
      state.itemsSelectedSize = filtered.map(item => {
        return {
          size: item?.attributes[0].value
        }
      })
      state.productImages = filtered?.[0]?.images
    },
    handleButton: (state, action) => {
      state.modal = true;
    },
    closeModal: (state, action) => {
      state.modal = false;
    }
  },
  extraReducers: {
    [getProductTitleAsync.fulfilled]: (state, action) => {
      state.title = action.payload.data[0];
    },

    [getProductVariantsAsync.fulfilled]: (state, action) => {
      state.items = action.payload.data;
    },

    [selectableAttributesAsync.fulfilled]: (state, action) => {
      state.color = action.payload.data[0];
      state.size = action.payload.data[1];
    }
  },
});

export const { handleSize, handleSelect, handleButton, closeModal } = productSlice.actions;
export default productSlice.reducer;