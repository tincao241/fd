import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaFacebook, FaLink, FaTwitter, FaYahoo } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav>
      
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="navbar-name">DANG TRUNG TIN</h3>
          <button className="nav-toggle" onClick={()=>setShowDropDown(!showDropdown)}>
            <FaBars />
          </button>
        </div>

        <div className={`links-container ${showDropdown && "show-container"}`}>
          <ul className="links">
            {links.map((link) => {
              const {  url, text } = link;
              return (
                <li key ={link.id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((social)=>{
            
            return (
              <li key={social.id}>
                <a href={social.url}>{social.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
