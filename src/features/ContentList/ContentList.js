import React from "react";
import "./ContentList.css"
import ContentItem from "./ContentItem";

export default function ContentList() {
    
    return (
        <main className="main-content">
           <ContentItem />
           <ContentItem />
           <ContentItem />
        </main>
    );
}