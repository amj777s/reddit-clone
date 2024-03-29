import React from 'react';
// import './App.css';
import Root from './components/root/Root';
import ContentList from '../features/ContentList/ContentList';
import CommentPage from '../features/CommentPage/CommentPage';
import NotFound from './components/NotFound/NotFound';

import {
	createBrowserRouter,
  createRoutesFromElements,
	Route,
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
        <Route
          path="*"
          element={<NotFound />}
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


