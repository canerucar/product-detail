import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductTitleAsync = createAsyncThunk(
  'product/getProductTitleAsync',
  async () => {
    const resp = await fetch(`${import.meta.env.VITE_URL}/productTitle`);
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);

export const getProductVariantsAsync = createAsyncThunk(
  'product/getProductVariants',
  async () => {
    const resp = await fetch(`${import.meta.env.VITE_URL}/productVariants`);
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);

export const selectableAttributesAsync = createAsyncThunk(
  'product/selectableAttributesAsync',
  async () => {
    const resp = await fetch(`${import.meta.env.VITE_URL}/selectableAttributes`);
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);
