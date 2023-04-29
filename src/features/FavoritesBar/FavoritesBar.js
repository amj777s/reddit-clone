import React from "react";
import { useSelector } from "react-redux";
import './FavoritesBar.css';
import { selectHasData, selectAllFavorites } from "./favoritesBarSlice";

export default function FavoritesBar() {
    const hasData = useSelector(selectHasData);
    const favorites = useSelector(selectAllFavorites);
    return (
        <div className="favorites-bar">
            <h2>Favorites Bar</h2>
           {!hasData && <p>Add to favorites to save for later</p>}
           {Object.values(favorites).map(favorite => {
                return <p key={favorite.title}>{favorite.title}</p>
           })}
           {hasData && <p className="download-button">Download</p>}
           
        </div>
    )
}   