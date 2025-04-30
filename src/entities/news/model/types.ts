import { CategoryType } from '../../category';

export interface INEWS {
  author: string;
  category: CategoryType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INEWS[];
  page: number;
  status: string;
}
