import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'favoritesBar',
    initialState: {
        favorites: {

        },
        hasData: false
    },
    reducers: {
        addFavorite: (state,action) => {
            state.hasData = true;
            const id = action.payload.title;
            state.favorites[id] = action.payload; //should be an object
        },
        deleteFavorite: (state, action) => {
            delete state.favorites[action.payload];
        }

    }
}

const favoritesBarSlice = createSlice(options);
export default favoritesBarSlice.reducer;
export const {addFavorite, deleteFavorite} = favoritesBarSlice.actions;
export const selectAllFavorites = state => state.favoritesBar.favorites;
export const selectHasData = state => state.favoritesBar.hasData;
export const selectFavorite = (state, title) => state.favoritesBar.favorites[title];