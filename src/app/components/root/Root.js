import React,{useState} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ROUTES from '../../routes';
import './root.css';
import SearchBar from "../../../features/SearchBar/SearchBar";
import FavoritesBar from "../../../features/FavoritesBar/FavoritesBar";
import menuButton from '../../../icons/menu.png';
import favoritesButton from '../../../icons/favorite.png';
import xButton from '../../../icons/xbutton.png';
import { toggleState } from "../../../utils/HelperFuncs";
import { menuStyle, hidden } from "../../../Styles/menuStyle";


export default function Root() {
    const [menuIsShown, setShowMenu] = useState(false);
    const [favoritesAreShown, setShowFavorites] = useState(false);
    const navigate = useNavigate();


    return (
        <div className='App'>   
            <header>
                <div className="main-header">
                    <img className="menuButton" src={menuButton} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}  />
                    <h1 onClick={()=> navigate('/r/popular')}>Reddit-Lite</h1>
                    <img src={favoritesButton} className="menuButton" onClick={()=> {toggleState(favoritesAreShown, setShowFavorites)}}  />

                </div>
                <SearchBar />
            </header>
        
            <nav className='subreddits' style={menuIsShown? menuStyle: hidden}>
                <h2>Top Subreddits</h2>
                <NavLink to={ROUTES.popularRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/Popular</NavLink>
                <NavLink to={ROUTES.picsRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/Pics</NavLink>
                <NavLink to={ROUTES.newsRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/News</NavLink>
                <NavLink to={ROUTES.gamingRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/Gaming</NavLink>
                <NavLink to={ROUTES.snesRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/Snes</NavLink>
                <NavLink to={ROUTES.askRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/AskReddit</NavLink>
                <NavLink to={ROUTES.tilRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/TodayILearned</NavLink>
                <NavLink to={ROUTES.prequelRoute()} onClick={()=> {toggleState(menuIsShown, setShowMenu)}}>r/PrequelMemes</NavLink>
                {menuIsShown && <img src={xButton} className="menuButton" onClick={()=> {toggleState(menuIsShown, setShowMenu)}}/>}
            </nav>
            <FavoritesBar favoritesAreShown={favoritesAreShown} setShowFavorites={setShowFavorites} />
            <Outlet />
        </div>
    
    )
}