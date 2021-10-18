import React from "react";
import "./Header.css";

const Header: React.FC = () => {
   return (
      <header className="header">
         <div className="header-container">
            <h1 className="title">mini blog</h1>
            <p>daily personal blog</p>
         </div>
      </header>
   );
};

export default Header;
