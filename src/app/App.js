import React from 'react';
import './App.css';
import SearchBar from '../features/SearchBar/SearchBar';
import ContentList from '../features/ContentList/ContentList';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Outlet, 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Reddit-Lite</h1>
          <SearchBar />
        </header>
        
        <nav className='subreddits'>
            <NavLink>r/Popular</NavLink>
            <NavLink>r/Pics</NavLink>
            <NavLink>r/News</NavLink>
            <NavLink>r/News</NavLink>
            <NavLink>r/Gaming</NavLink>
            <NavLink>r/Snes</NavLink>
            <NavLink>r/AskReddit</NavLink>
            <NavLink>r/TodayILearned</NavLink>
            <NavLink>r/PrequelMemes</NavLink> 
        </nav>
      </div>
      <Outlet />
          
      <Routes>
        <Route path = '/r/:subreddit' element={<ContentList />}></Route>

      </Routes>
    </Router>
    
  );
}

export default App;
