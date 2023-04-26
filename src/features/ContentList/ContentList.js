import React, { useEffect } from "react";
import "./ContentList.css"
import ContentItem from "./ContentItem";
import { useSelector } from "react-redux";
import { selectContents } from "../SearchBar/seachBarSlice";



export default function ContentList() {
    const contents = useSelector(selectContents);
    

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


                />
            )
        })}

        </main>
    );
}