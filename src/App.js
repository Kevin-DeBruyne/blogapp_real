// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState,useEffect} from 'react';
// import { Container, Navbar, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {signOut, signout} from "firebase/auth";
// import {useNavigate} from "react-router-dom";
import {auth} from "./firebase-config";
function App(){
  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"));
  // let navigate=useNavigate();
  const signUserOut =()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
      // navigate("/login");
    });
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? <Link to="/login">login</Link> : (
        <>
        <Link to="/createpost">Create a Post</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
        
        )}  
        
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
