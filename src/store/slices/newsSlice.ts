import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IFilters, INEWS } from '../../interfaces';
import { PAGE_SIZE } from '../../constants/constants';

interface State {
  news: INEWS[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  },
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadNews: (state, action: PayloadAction<INEWS[]>) => {
      state.news = action.payload;
    },
    setFilters: (state, action: PayloadAction<{ key: string; value: string | null | number }>) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { loadNews, setFilters } = newsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNews = (state: RootState) => state.news.news;

const newsReducer = newsSlice.reducer;

export default newsReducer;
