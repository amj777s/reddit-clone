import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/SearchBar/seachBarSlice';

export const store = configureStore({
  reducer: {
   searchResults: searchResultsReducer
  },
});
