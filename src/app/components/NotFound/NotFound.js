import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './NotFound.css';
export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="errorPage">
            <h1>404... Not Found</h1>
            <span onClick={()=> navigate('/r/popular')}> back to Reddit-lite</span>
        </div>
    )
}