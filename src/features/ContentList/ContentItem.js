import React from "react";
import './ContentItem.css';

export default function ContentItem(props) {
    return (
        <div className="content">
            <p>{`r/${props.subreddit}`}</p>
            <h4>{props.title}</h4>
            <div className="media"></div>
            <div className="extras">
                <span>{`Posted By u/${props.author}`}</span>
                <span>{`${props.comments} comments`}</span>
            </div>
        </div>
    )
}