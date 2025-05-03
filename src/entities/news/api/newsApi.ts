import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ParamsType } from '../../../shared/interfaces';
import { NewsApiResponse } from '..';
import { loadNews } from '../model/newsSlice';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNewsByParams: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0, // stop data cashing
      query: (params) => {
        const { page_number = 1, page_size = 20, category, keywords } = params || {};
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      /**  // Set data in a store */
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(loadNews(data.news));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: 'latest-news',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsByParamsQuery, useGetLatestNewsQuery } = newsApi;
