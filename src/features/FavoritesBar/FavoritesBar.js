import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './FavoritesBar.css';
import { selectHasData, selectAllFavorites, deleteAllFavorites } from "./favoritesBarSlice";
import exportFromJSON from "export-from-json";
import xButton from '../../icons/xbutton.png'

export default function FavoritesBar({favoritesAreShown, setShowFavorites, toggleFavorites}) {
    const dispatch = useDispatch();
    const hasData = useSelector(selectHasData);
    const favorites = useSelector(selectAllFavorites);

    const downloadData = data => {
        const fileName = "favorites";
        const exportType = exportFromJSON.types.json;
        exportFromJSON({data, fileName, exportType});
        dispatch(deleteAllFavorites());
    }

    return (
        <div className="favorites-bar" >
            <h2>Favorites Bar</h2>
           {!hasData && <p>Add to favorites to save for later</p>}
           {Object.values(favorites).map(favorite => {
                return <p key={favorite.title}>{favorite.title}</p>
           })}
           {hasData && <p onClick ={()=> downloadData(favorites)} className="download-button">Download</p>}
           {favoritesAreShown && <img src={xButton} className="menuButton" onClick={()=> toggleFavorites()} />}
        </div>
    )
}   