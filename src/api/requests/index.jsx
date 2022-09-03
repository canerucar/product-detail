import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductTitleAsync = createAsyncThunk(
  'product/getProductTitleAsync',
  async () => {
    const resp = await fetch("http://localhost:3000/productTitle");
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);

export const getProductVariantsAsync = createAsyncThunk(
  'product/getProductVariants',
  async () => {
    const resp = await fetch("http://localhost:3000/productVariants");
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);

export const selectableAttributesAsync = createAsyncThunk(
  'product/selectableAttributesAsync',
  async () => {
    const resp = await fetch("http://localhost:3000/selectableAttributes");
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);
