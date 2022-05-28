import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useMoralis } from 'react-moralis'

export default function App() {

  let { isAuthenticated } = useMoralis()

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              {isAuthenticated && <Link to="/Posts">Posts</Link>}
            </li>
            <li>
              {isAuthenticated && <Link to="/Post/:id">Post</Link>}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Post/:id">
            <Post />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Posts() {
  return <h2>Posts</h2>;
}

function Post() {
  return <h2>post</h2>;
}