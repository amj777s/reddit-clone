import React from 'react';
// import './App.css';
import Root from './components/root/Root';
import ContentList from '../features/ContentList/ContentList';
import CommentPage from '../features/CommentPage/CommentPage';
import { getContents} from '../features/subreddit/subbredditSlice';
import { useDispatch } from 'react-redux';
import {
	createBrowserRouter,
  createRoutesFromElements,
	Route,
  Routes,
  RouterProvider,     
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route 
            path = 'r/:subreddit' 
            element={<ContentList />}
          />
          <Route
            path='r/:subreddit/comments/:user/:title'
            element={<CommentPage />}
          />
          
        <Route 
          path='search/:searchresult' 
          element={<ContentList />}
        />
      </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;


