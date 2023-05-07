import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCommentPage = createAsyncThunk(
    'commentPage/getCommentPage',
    async (search) => {
        const response = await fetch(search);
        const json = await response.json();
        return json;
    }
)

const options = {
    name: 'commentPage',
    initialState: {
        info: {
            parent: {

            },
            comments: {            
            }

        },
        isLoading: false,
        hasFailed: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCommentPage.pending, (state) => {
                state.isLoading = true;
                state.hasFailed = false;
            })
            .addCase(getCommentPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasFailed = false;
                state.info.parent =  {
                    title: action.payload["0"].data.children["0"].data.title,
                    author: action.payload["0"].data.children["0"].data.author,
                    upvotes: action.payload["0"].data.children["0"].data.ups,
                    comments: action.payload["0"].data.children["0"].data.num_comments,
                    url: action.payload["0"].data.children["0"].data.url,
                    media: action.payload["0"].data.children["0"].data.media,
                    thumbnail: action.payload["0"].data.children["0"].data.thumbnail,
                    isVideo:action.payload["0"].data.children["0"].data.is_video,
                    subreddit: action.payload["0"].data.children["0"].data.subreddit,
                    commentPage: action.payload["0"].data.children["0"].data.subreddit,
                    imgsrc: action.payload["0"].data.children["0"].data.url_overridden_by_dest
                };
                state.info.comments = {};
                action.payload["1"].data.children.map(comment => {
                    state.info.comments[comment.data.id] = {
                        id: comment.data.id,        
                        author: comment.data.author,
                        body: comment.data.body,
                        upvotes: comment.data.ups,
                        replies: comment.data.replies
                        // main_reply: {
                        //     body: comment.data.replies.data.children["0"].data.body,
                        //     upvotes: comment.data.replies.data.children["0"].data.ups,
                        //     author: comment.data.replies.data.children["0"].data.author
                        // }
                    };
                })    
            })
            .addCase(getCommentPage.rejected, (state) => {
                state.isLoading = false;
                state.hasFailed = true;
            })
    }
};

const commentPageSlice = createSlice(options);
export const selectCommentInfo = state => state.commentPage.info;
export default commentPageSlice.reducer;