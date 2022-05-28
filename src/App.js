import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useMoralis } from 'react-moralis'
import NavbarComponent from './components/Navbar/Navbar.component';

export default function App() {

  return (

      <div>
      HELLO WORLD
        <NavbarComponent />

      </div>

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