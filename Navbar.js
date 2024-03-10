// Navbar.js
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ContactPage from './ContactPage';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Weather API App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
		            <Link to="/signup">Signup</Link>
                <Link to="/contact">Contact</Link>

            </ul>
  </nav>
        <Routes>
            <Route path="/" element={<LandingPage/>} exact/>
            <Route path="/login" element={<LoginPage/>} exact/>
            <Route path="/Signup" element={<SignupPage/>} exact/>
            <Route path="/contact" element={<ContactPage/>} exact/>
        </Routes>



          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;