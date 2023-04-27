import React, {useEffect} from "react";
import "./ContentList.css"
import ContentItem from "./ContentItem";
import { useSelector} from "react-redux";
import { useLocation, useParams, useLoaderData } from "react-router-dom";
import { selectSearchResults } from "../SearchBar/seachBarSlice";
import { selectSubredditContents} from "../subreddit/subbredditSlice";


export default function ContentList() {
    const location = useLocation();
    const {subreddit} = useParams();
    const selector = location.pathname.includes('search') ? selectSearchResults : selectSubredditContents;
    console.log(location);
    console.log(selector.name);
    const contents = useSelector(selector);
    
  
  
    
    return (
        <main className="main-content">
        {contents.map((content,i) => {
            return (
                <ContentItem 
                    title={content.data.title}
                    subreddit={content.data.subreddit}
                    upvotes={content.data.ups}
                    author={content.data.author}
                    url = {content.data.url}
                    comments= {content.data.num_comments}
                    key = {i}
                    thumbnail = {content.data.thumbnail}


                />
            )
        })}

        </main>
    );
}