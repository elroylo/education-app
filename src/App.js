import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMoralis } from 'react-moralis'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import PostPage from './pages/Posts'
import CreatePost from './pages/CreatePost';
import BlogPage from './pages/Blog'
import SpecBlog from './pages/SpecBlog'
import CreateBlog from './pages/CreateBlog'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<SpecBlog />} />
        <Route path="/blog/create" element={<CreateBlog />} exact />
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