import React from "react";

// import "./style/index.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
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
