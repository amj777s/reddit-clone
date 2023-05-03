import React from "react";
import './ContentItem.css';
import { Link } from "react-router-dom";
import { addFavorite } from "../FavoritesBar/favoritesBarSlice";
import { getCommentPage } from "../CommentPage/CommentPageSlice";
import { NumToStr } from "../../utils/HelperFuncs";
import { useDispatch } from "react-redux";
import redditLogo from '../../reddit_logo.png';
import upvoteArrow from '../../icons/arrow-up.png'
import downvoteArrow from '../../icons/arrow-down.png';
import commentIcon from '../../icons/comment.png';

export default function ContentItem(props) {
    
    const dispatch = useDispatch();

    const loadDefaultsrc = (e) => {
        e.target.onerror = null;
        e.target.src = redditLogo;
    }

    const loadCommentPage = (e) => {
        const url = `https://www.reddit.com${props.commentPage}.json`;
        dispatch(getCommentPage(url));
    }

    const addToFavorites = (e) => {
        dispatch(addFavorite(props));
    }

    return (
        <div className="contents">
            <div className="above-title">
                <Link to={`/r/${props.subreddit}`}>
                    <p>{`r/${props.subreddit}`}</p>
                </Link>
                <span
                    className="favorites-button"
                    onClick={addToFavorites}>
                    Add to Favorites
                </span>
            </div>
            <Link to={props.commentPage}>
                <div className="title" onClick={loadCommentPage}>
                    <h4>{props.title}</h4>
                    {props.thumbnail && <img className="media" alt="ello" src={props.thumbnail} onError={loadDefaultsrc} />}
                </div>
            </Link>
            <div className="extras">
                <span>{`Posted By u/${props.author}`}</span>
                <div>
                    <img className="icons" src={upvoteArrow} />
                    <span>{NumToStr(props.upvotes)}</span>
                    <img className="icons" src={downvoteArrow} />
                </div>
                <div>
                    <img className="icons" src={commentIcon} />
                    <Link to={`${props.commentPage}`}>
                        <span onClick={loadCommentPage}>{`${props.comments} comments`}</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}