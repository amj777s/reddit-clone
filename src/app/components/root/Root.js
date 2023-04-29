import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from '../../routes';
import './root.css';
import SearchBar from "../../../features/SearchBar/SearchBar";
import FavoritesBar from "../../../features/FavoritesBar/FavoritesBar";

export default function Root() {
    return (
        <div className='App'>
            <header>
                <h1>Reddit-Lite</h1>
                <SearchBar />
            </header>
        
            <nav className='subreddits'>
                <h2>Top Subreddits</h2>
                <NavLink to={ROUTES.popularRoute()}>r/Popular</NavLink>
                <NavLink to={ROUTES.picsRoute()}>r/Pics</NavLink>
                <NavLink to={ROUTES.newsRoute()}>r/News</NavLink>
                <NavLink to={ROUTES.gamingRoute()}>r/Gaming</NavLink>
                <NavLink to={ROUTES.snesRoute()}>r/Snes</NavLink>
                <NavLink to={ROUTES.askRoute()}>r/AskReddit</NavLink>
                <NavLink to={ROUTES.tilRoute()}>r/TodayILearned</NavLink>
                <NavLink to={ROUTES.prequelRoute()}>r/PrequelMemes</NavLink> 
            </nav>
            <FavoritesBar />
            <Outlet />
        </div>
    
    )
}