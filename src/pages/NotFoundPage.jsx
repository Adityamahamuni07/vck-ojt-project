import React from 'react';
import {Link} from 'react';
import './NotFound.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
const NotFound = () => {
  return (
  <div>
    <Header/>
    <div className="notfound-container">
      <Header/>
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
       <Footer/>
    </div>
  );
};

export default NotFound;