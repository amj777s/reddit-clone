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
        contents: {}
    },
    reducers: {
        clearContents: (state) => {
            state.contents = {};
        }

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
            .addCase(getContents.rejected, (state) => {
                state.isLoading = false;
                state.hasFailed = true;
            })
    }
}
export const selectSubredditContents = state => state.subredditResults.contents;
const subredditSlice = createSlice(options);
export const {clearContents} = subredditSlice.actions;
export default subredditSlice.reducer;
