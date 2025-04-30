import { CategoryType } from '../../entities/category/model/types';

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
export type ParamsType = Partial<IFilters>;
