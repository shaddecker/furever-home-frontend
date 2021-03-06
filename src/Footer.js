import React from 'react';
import logo from "./logo.svg";
import './App.css';

const Footer = () => {
  let lastModified = document.lastModified;
  return (
    
      <footer className="footerContainer">
        <div className="footerTitle">
          Site created by Shad Decker <br/>
          Using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://www.npmjs.com/package/axios" target="_blank"  rel="noopener noreferrer">Axios</a><br/>
          Last Modified: {lastModified}
        </div>
        <div className="footerDeadSpace"></div>
        <div className="footerLogo"><img src={logo} height="100px" className="App-logo" alt="logo" /></div>
      </footer>
  )
}

export default Footer;
