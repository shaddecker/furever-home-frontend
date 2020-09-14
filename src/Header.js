import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';

const Header = () => {
  return (
    <nav>
    <div className="navContainer">
      <div className="nav">
        <div className="navtop">Otter Creek Animal Shelter | Hazelton, IA | 319-636-2061 | info@ottercreekanimalshelter.org</div>        
        <div className="navTitle">Furever Home</div>
        <div className="navLogo"><img height="50px" src="../OCAS-Logo-75.png" alt="OCAS Logo" /></div>
        <div className="nav2"><Link to='/animals'>All Animals</Link></div>
        <div className="nav3">Link</div>        
        <div className="nav4">Link</div>
        <div className="nav5">Link</div>
        <div className="nav6">Link</div>        
      </div>
    </div>
    </nav>
  )
}

export default Header;