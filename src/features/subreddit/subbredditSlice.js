import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getContents = createAsyncThunk(
    'subreddit/getContents',
    async (search) => {
        const response = await fetch(search);
        const json = await response.json();
        return json.data.children;
    }
)

const options = {
    name: 'subreddit',
    initialState: {
        isLoading: false,
        hasFailed: false,
        contents: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getContents.pending, (state) => {
                state.isLoading = true;
                state.hasFailed = false;
            })
            .addCase(getContents.fulfilled, (state,action) => {
                state.isLoading = false;
                state.hasFailed = false;
                state.contents = action.payload; //could create a problem when trying to load next 25
            })
            .addCase(getContents.rejected, (state) => {
                state.isLoading = false;
                state.hasFailed = true;
            })
    }
}
export const selectSubredditContents = state => state.subredditResults.contents;
const subredditSlice = createSlice(options);
export default subredditSlice.reducer;
