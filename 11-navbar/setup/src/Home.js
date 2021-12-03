import React from "react";
import avatar from "./avatar.JPG";
import  css from "./images/css.png";
import  html from "./images/html.png";
import  js from "./images/js.png";
import  nodejs from "./images/nodejs.png";
import  ppt from "./images/ppt.png";
import  word from "./images/js.png";
import  unity from "./images/unity.png";

function Home() {
  return (
    <div>
      <div className="section name-section">
        <img src={avatar} alt="avatar" className="avatar" />
        <h3>Dang Trung Tin</h3>
        <p>Software Engineer</p>
      </div>
      <div className="section education-section" id="education-section">
        <h3>Ton Duc Thang University</h3>
        <p> Software Engineering</p>
      </div>
      <div className="section technical-section" id="technical-section">
        <h3>Technical</h3>
        <img src={html} alt="html" className="technical-logo"/>
        
        <img src={css} alt="css" className="technical-logo"/>
        <img src={js} alt="js" className="technical-logo"/>
        <img src={unity} alt="html" className="technical-logo"/>
        
        <img src={nodejs} alt="css" className="technical-logo"/>
        <img src={word} alt="js" className="technical-logo"/>
      </div>
      <div className="section projects" id="project-section">
        <h3>Projects</h3>
      </div>
    </div>
  );
}

export default Home;
