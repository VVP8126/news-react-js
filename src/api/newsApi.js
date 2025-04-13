import axios from 'axios';
import { articles } from '../assets/data';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ page_number = 1, page_size = 20, category, keywords }) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category, keywords },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Too many requests (limit is 20 per day)');
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async () => {
  const to = setTimeout(() => {
    console.log('Timeout 1500ms');
  }, 1500);
  clearTimeout(to);
  return articles;
};
