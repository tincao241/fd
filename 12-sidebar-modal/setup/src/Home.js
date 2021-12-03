import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
import avatar from "./avatar.JPG";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <div className="introduction">
      <div className="avatar-section">
        
        <img src={avatar} alt="avatar" className="avatar" />
        <h2 className="name">Dang Trung Tin</h2>
      </div>
      <div className="introduction-section">

      </div>
    </div>
    </main>

    
  );
};

export default Home;
