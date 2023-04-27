import React from 'react';
import './App.css';
import SearchBar from '../features/SearchBar/SearchBar';
import ContentList from '../features/ContentList/ContentList';
import { getContents} from '../features/subreddit/subbredditSlice';
import { useDispatch } from 'react-redux';
import ROUTES from './routes';
import {
  BrowserRouter as Router,
	createBrowserRouter,
  createRoutesFromElements,
	Routes,
	Route,
	NavLink,
	Outlet, 
} from "react-router-dom";



function App() {
const baseUrl = "https://www.reddit.com/r/";
const dispatch = useDispatch();
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Reddit-Lite</h1>
          <SearchBar />
        </header>
        
        <nav className='subreddits'>
            <NavLink to={ROUTES.popularRoute()}>r/Popular</NavLink>
            <NavLink to={ROUTES.picsRoute()}>r/Pics</NavLink>
            <NavLink to={ROUTES.newsRoute()}>r/News</NavLink>
            <NavLink to={ROUTES.gamingRoute()}>r/Gaming</NavLink>
            <NavLink to={ROUTES.snesRoute()}>r/Snes</NavLink>
            <NavLink to={ROUTES.askRoute()}>r/AskReddit</NavLink>
            <NavLink to={ROUTES.tilRoute()}>r/TodayILearned</NavLink>
            <NavLink to={ROUTES.prequelRoute()}>r/PrequelMemes</NavLink> 
        </nav>
      </div>
      <Outlet />

      <Routes>
        <Route 
          path = '/r/:subreddit' 
          element={<ContentList />}
          loader={({ params }) => {
            const search = `${baseUrl}${params.subreddit}.json`;
            dispatch(getContents(search));
          }}>
          </Route>
        <Route path='/search/:searchresult' element={<ContentList />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
