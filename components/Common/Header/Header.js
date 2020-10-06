import React from "react";

import "./style/index.scss";
import "./style/index.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <span className="main-logo">LO</span>
        <span className="sub-logo">GO</span>
        <nav className="nav">
          <ul>
            <li>
              <a exact href="/">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
