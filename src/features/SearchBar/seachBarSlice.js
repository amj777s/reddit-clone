import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk(
    'searchResults/getSearchResults',
    async (search) => {
        const response = await fetch(search);
        const json = await response.json();
        return json.data.children;
    } 
)

const options = {
    name: 'searchResults',
    initialState:{
        isLoading: false,
        hasFailed: false,
        results: []
    },
    reducers: {

    },
    extraReducers: {
        [getSearchResults.pending]: (state) => {
            state.isLoading = true;
            state.hasFailed = false
        },
        [getSearchResults.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasFailed = false;
            state.results = action.payload;
        },
        [getSearchResults.rejected]: (state) => {
            state.isLoading = false;
            state.hasFailed =  true;
        }
    }
}

const searchResultsSlice = createSlice(options);
export default searchResultsSlice.reducer;