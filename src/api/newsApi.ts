import axios from 'axios';
import { CategoryApiResponse, NewsApiResponse, ParamsType } from '../interfaces';
import { articles } from '../assets/data.ts';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (params?: ParamsType): Promise<NewsApiResponse> => {
  try {
    const { page_number = 1, page_size = 20, category, keywords } = params || {};
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category, keywords },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getCategories = async (): Promise<CategoryApiResponse> => {
  try {
    const response = await axios.get<CategoryApiResponse>(`${BASE_URL}available/categories`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: '', status: 'error' };
  }
};

export const getArticles = async () => {
  const to = setTimeout(() => {
    console.log('Timeout 1500ms');
  }, 1500);
  clearTimeout(to);
  return articles;
};
