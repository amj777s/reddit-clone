import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../features/SearchBar/seachBarSlice';
import subredditReducer from '../features/subreddit/subbredditSlice';
import favoritesBarReducer from '../features/FavoritesBar/favoritesBarSlice';
import commentPageReducer from '../features/CommentPage/CommentPageSlice';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    subredditResults: subredditReducer,
    favoritesBar: favoritesBarReducer,
    commentPage: commentPageReducer,
  },
});
