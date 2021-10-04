import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@common/store';

const selTechBook = (state: RootState) => state.techBook;

export const selTechBookItems = createSelector(selTechBook, (state) => {
  return state.items;
});
