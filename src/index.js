import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'
import './mobile.css'
import App from './App'

import Home from './routes/Index'
import Pages from './routes/Pages'
import Post from './routes/Post'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/page/:slug' element={<Pages />} />
          <Route path='/post/:id' element={<Post />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
