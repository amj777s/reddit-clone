import { configureStore } from '@reduxjs/toolkit';
import seachResultsReducer from '../features/SearchBar/seachBarSlice';

export const store = configureStore({
  reducer: {
   searchResults: seachResultsReducer
  },
});
