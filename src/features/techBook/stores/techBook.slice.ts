/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { TechBookModel } from '../models';
import { effTechBookLoadList } from './techBook.effect';

interface TechBookState {
  items: TechBookModel[];
  loading: boolean;
}

export function getInitTechBookState() {
  const result: TechBookState = {
    items: [],
    loading: true,
  };
  return result;
}

export const techBookSlice = createSlice({
  name: 'techBook',
  initialState: getInitTechBookState(),
  reducers: {
    reset() {
      return getInitTechBookState();
    },
    // actions here.. 
  },
  extraReducers: builder => {
    builder
      .addCase(effTechBookLoadList.pending, state => {
        state.loading = true;
      })
      .addCase(effTechBookLoadList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(effTechBookLoadList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
    ;
  }
});