import React from "react";
import './Comment.css';
import { NumToStr } from "../../../utils/HelperFuncs";
import upvoteArrow from '../../../icons/arrow-up.png';
import downvoteArrow from '../../../icons/arrow-down.png';
export default function Comment(props) {
    return (
        <div className="comment">
            <span className="comment-author">{`u/${props.author}`}</span>
            <p className="comment-body">{props.body}</p>
            <div className="comment-upvotes">
                    <img className="icons" src={upvoteArrow} />
                    <span>{NumToStr(props.upvotes)}</span>
                    <img className="icons" src={downvoteArrow} />
                </div>
        </div>
    )
}