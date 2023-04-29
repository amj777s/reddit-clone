import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/SearchBar/seachBarSlice';
import subredditReducer from '../features/subreddit/subbredditSlice';
import favoritesBarReducer from '../features/FavoritesBar/favoritesBarSlice';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    subredditResults: subredditReducer,
    favoritesBar: favoritesBarReducer
  },
});
