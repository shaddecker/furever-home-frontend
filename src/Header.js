import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
// import styled, {keyframes} from 'styled-components';
// import {bounce} from 'react-animations';

const Header = () => {
  return (
    <div className="navContainer">
      <nav className="nav">
        <div className="navtopv">Tracking the well being of our shelter animals</div>        
        <div className="nav1"><Link to='/animals'>All Animals</Link></div>
        <div className="nav2"></div>
        <div className="nav3"></div>
        <div className="navTitle">Furever Home</div>
        <div className="nav4"></div>
        <div className="nav5"></div>
        <div className="nav6"></div>
        <div className="nav7"></div>
      </nav>
    </div>
  )
}

export default Header;