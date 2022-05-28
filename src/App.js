import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMoralis } from 'react-moralis'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import PostPage from './pages/Posts'
import SpecPosts from './pages/SpecPosts/SpecPosts.page'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/post/:id" element={<SpecPosts />} />
      </Routes>
    </Router>
  );
}

{/* <Routes>
          <Route path="/Home">
            <Home />

          </Route>
          <Route path="/Posts">
            <Posts/>
          </Route>
          <Route path="/Post/:id">
            <Post/>
          </Route>
        </Routes> */}
//</Router> </Router>
//<Router>