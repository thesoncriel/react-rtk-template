import { TechBookEntity, TechBookSearchParams } from '@core/entities';
import { publicApi } from '@core/network';

export const techBookRepository = {
  fetchSearchList(params: TechBookSearchParams) {
    return publicApi.get<TechBookEntity[]>('/data/techbook.json', params);
  },
};
