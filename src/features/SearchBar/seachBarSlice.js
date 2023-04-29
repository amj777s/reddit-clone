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
        contents: {}
    },
    reducers: {
        clearSearchResults: (state) => {
            state.contents = {};
        }

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
                action.payload.map(content => {
                    state.contents[content.data.title] = {
                        title: content.data.title,
                        subreddit: content.data.subreddit,
                        upvotes: content.data.ups,
                        author: content.data.author,
                        url: content.data.url,
                        comments: content.data.num_comments,
                        key: content.data.title,
                        thumbnail: content.data.thumbnail
                    };

                })
            })
            .addCase(getSearchResults.rejected, (state) => {
                state.isLoading = false;
                state.hasFailed =  true;
            })
            

    }
}
export const selectSearchResults = state => state.searchResults.contents;
const searchResultsSlice = createSlice(options);
export const {clearSearchResults} = searchResultsSlice.actions;
export default searchResultsSlice.reducer;