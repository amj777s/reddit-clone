import React,{useState} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ROUTES from '../../routes';
import './root.css';
import SearchBar from "../../../features/SearchBar/SearchBar";
import FavoritesBar from "../../../features/FavoritesBar/FavoritesBar";
import menuButton from '../../../icons/menu.png';
import favoritesButton from '../../../icons/favorite.png';
import xButton from '../../../icons/xbutton.png';



export default function Root() {
    const [menuIsShown, setShowMenu] = useState(false);
    const [favoritesAreShown, setShowFavorites] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (e) => {
            // keeps the routes from toggling the menu when you click on them in the non-mobile layout
        if(window.innerWidth < 500){
            const menu = document.getElementsByClassName('subreddits')[0];
            menu.classList.toggle('zmenuStyle'); 
            menuIsShown? setShowMenu(false): setShowMenu(true);
        }
    }

    const toggleFavorites = (e) => {
        const favorites = document.getElementsByClassName('favorites-bar')[0];
        favorites.classList.toggle('zmenuStyle'); 
        favoritesAreShown? setShowFavorites(false): setShowFavorites(true);
    }


    return (
        <div className='App'>   
            <header>
                <div className="main-header">
                    <img className="menuButton" src={menuButton} onClick={toggleMenu}   />
                    <h1 onClick={()=> navigate('/r/popular')}>Reddit-Lite</h1>
                    <img src={favoritesButton} className="menuButton" onClick={toggleFavorites}   />
                </div>
                <SearchBar />
            </header>
            <nav id="subreddits" className='subreddits'>
                <h2>Top Subreddits</h2>
                <NavLink to={ROUTES.popularRoute()} onClick={toggleMenu}>r/Popular</NavLink>
                <NavLink to={ROUTES.picsRoute()} onClick={toggleMenu}>r/Pics</NavLink>
                <NavLink to={ROUTES.newsRoute()} onClick={toggleMenu}>r/News</NavLink>
                <NavLink to={ROUTES.gamingRoute()} onClick={toggleMenu}>r/Gaming</NavLink>
                <NavLink to={ROUTES.snesRoute()} onClick={toggleMenu}>r/Snes</NavLink>
                <NavLink to={ROUTES.askRoute()} onClick={toggleMenu}>r/AskReddit</NavLink>
                <NavLink to={ROUTES.tilRoute()} onClick={toggleMenu}>r/TodayILearned</NavLink>
                <NavLink to={ROUTES.prequelRoute()} onClick={toggleMenu}>r/PrequelMemes</NavLink>
                {menuIsShown && <img src={xButton} className="menuButton" onClick={toggleMenu} />}
            </nav>
            <FavoritesBar favoritesAreShown={favoritesAreShown} setShowFavorites={setShowFavorites} toggleFavorites={toggleFavorites}/>
            <Outlet />
        </div>
    
    )
}