import { createAsyncThunk } from '@reduxjs/toolkit';
import repo from '@core/repo';
import { TechBookSearchPayload } from '../models';
import { toTechBookModels } from './techBook.convert';

export const effTechBookLoadList = createAsyncThunk(
  'TechBookLoadList',
  async (payload: TechBookSearchPayload) => {
    const result = await repo.techBook.fetchSearchList({ q: payload.keyword });

    return toTechBookModels(result);
  }
);