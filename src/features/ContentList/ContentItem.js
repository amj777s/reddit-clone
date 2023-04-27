import React from "react";
import './ContentItem.css';
import { Link } from "react-router-dom";

export default function ContentItem(props) {
    
    const loadDefaultsrc = (e)=> {
        e.target.src = '../../reddit_logo.png';
    }
    
    return (
        <Link to={props.url}>
            <div className="content">
                <p>{`r/${props.subreddit}`}</p>
                <div className="title">
                    <h4>{props.title}</h4>
                    {props.thumbnail && <img className="media" src={props.thumbnail} onError={loadDefaultsrc}/>}
                </div>
                <div className="extras">
                    <span>{`Posted By u/${props.author}`}</span>
                    <span>{`${props.comments} comments`}</span>
                </div>
            </div>
        </Link>
    )
}