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
        contents: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearchResults.pending, (state)=> {
                state.isLoading = true;
                state.hasFailed = false
            })
            .addCase(getSearchResults.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasFailed = false;
                state.contents = action.payload;
            })
            .addCase(getSearchResults.rejected, (state) => {
                state.isLoading = false;
                state.hasFailed =  true;
            })
            

    }
}
export const selectSearchResults = state => state.searchResults.contents;
const searchResultsSlice = createSlice(options);
export default searchResultsSlice.reducer;