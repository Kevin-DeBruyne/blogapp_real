// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
// import { Container, Navbar, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
function App(){
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">create</Link>
        <Link to="/login">login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
