import React from "react";
import './ContentItem.css';
import { Link } from "react-router-dom";
import { addFavorite } from "../FavoritesBar/favoritesBarSlice";
import { useDispatch } from "react-redux";

export default function ContentItem(props) {
    const dispatch = useDispatch();

    const loadDefaultsrc = (e) => {
        e.target.src = '../../reddit_logo.png';
    }

    const addToFavorites = (e) => {
        dispatch(addFavorite(props));
        //useDispatch()
    }

    return (
        <div className="content">
            <div className="above-title">
                <p>{`r/${props.subreddit}`}</p>
                <span
                    className="favorites-button"
                    onClick={addToFavorites}>
                    Add to Favorites
                </span>
            </div>
            <Link to={props.url}>
                <div className="title">
                    <h4>{props.title}</h4>
                    {props.thumbnail && <img className="media" alt="ello" src={props.thumbnail} onError={loadDefaultsrc} />}
                </div>
            </Link>
            <div className="extras">
                <span>{`Posted By u/${props.author}`}</span>
                <span>{`${props.comments} comments`}</span>
            </div>
        </div>

    )
}