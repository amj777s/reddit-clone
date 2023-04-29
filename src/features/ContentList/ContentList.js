import React, { useEffect, useState } from "react";
import "./ContentList.css"
import ContentItem from "./ContentItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectSearchResults, clearSearchResults } from "../SearchBar/seachBarSlice";
import { selectSubredditContents, getContents, clearContents } from "../subreddit/subbredditSlice";

export default function ContentList() {
    const baseUrl = 'https://www.reddit.com/r/';

    const location = useLocation();
    const { subreddit } = useParams();
    const dispatch = useDispatch();

    const selector = location.pathname.includes('search') ? selectSearchResults : selectSubredditContents;
    const contents = useSelector(selector);

    useEffect(() => {
        if (!location.pathname.includes('search')) {
            const search = `${baseUrl}${subreddit}.json`;
            dispatch(clearContents());
            dispatch(getContents(search));
        } else {
            dispatch(clearSearchResults());
        }
    }, [location]);


    return (
        <main className="main-content">
            {Object.values(contents).map((content) => {
                return (
                    <ContentItem
                        title={content.title}
                        subreddit={content.subreddit}
                        upvotes={content.ups}
                        author={content.author}
                        url={content.url}
                        comments={content.comments}
                        key={content.title}
                        thumbnail={content.thumbnail}
                    />
                )
            })}

        </main>
    );
}