import { TechBookEntity } from '@core/entities';
import { TechBookModel } from '../models';

export function toTechBookModel(entity: TechBookEntity) {
  const result: TechBookModel = {
    id: entity.l_mast_id,
    title: entity.l_title,
    author: entity.l_author,
    year: entity.l_year,
  };
  return result;
}

export function toTechBookModels(entities: TechBookEntity[]) {
  return entities.map(toTechBookModel);
}
