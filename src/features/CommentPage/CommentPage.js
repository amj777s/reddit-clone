import React, { useId } from "react";
import "./CommentPage.css";
import {selectCommentInfo } from "./CommentPageSlice";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../FavoritesBar/favoritesBarSlice";
import { NumToStr } from "../../utils/HelperFuncs";
import CommentSection from "../../app/components/CommentSection/CommentSection";
import redditLogo from '../../reddit_logo.png';
import upvoteArrow from '../../icons/arrow-up.png';
import downvoteArrow from '../../icons/arrow-down.png'
import commentIcon from '../../icons/comment.png';


export default function CommentPage() {
    const comment_info = useSelector(selectCommentInfo);
    const dispatch = useDispatch();

    const loadDefaultsrc = (e) => {
        e.target.onerror = null;
        e.target.src = redditLogo;

    }

    const addToFavorites = (e) => {
        dispatch(addFavorite(comment_info.parent));
    }

    const selectSource = () => {
            if(comment_info.parent.isVideo){
                return (
                    <video className="video" controls>
                        <source src={comment_info.parent.media.reddit_video.fallback_url} type='video/mp4' />
                    </video>
                )
            }
            else {
                return <img alt="ello" onError={loadDefaultsrc} src={comment_info.parent.thumbnail} />
            }
    }

    return (
        <div className="content">
            <div className="content-section">
                <h2>{comment_info.parent.title}</h2>
                {selectSource()}
                <div className="details">
                    <div className="votes">
                        <img className="icons" src={upvoteArrow} />
                        <span>{NumToStr(comment_info.parent.upvotes)}</span>
                        <img className="icons" src={downvoteArrow} />
                    </div>
                    <div className="comment-info">
                        <img className="icons" src={commentIcon} />
                        <span>{`${NumToStr(comment_info.parent.comments)} comments`}</span>
                    </div>
                    <span
                        className="favorites-button"
                        onClick={addToFavorites}>
                        Add to Favorites
                    </span>
                </div>
                {Object.values(comment_info.comments).map(comment => {
                    return (
                        comment.body &&
                        <CommentSection
                        key={comment.id}
                        author = {comment.author}
                        body = {comment.body}
                        upvotes = {comment.upvotes}
                         />
                    )
                })}
            </div>
        </div>
    )
}
