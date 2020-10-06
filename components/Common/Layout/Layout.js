import React from "react";
import Header from "../Header";
// import Footer from "../Footer";

import "./style/index.scss";
import "./style/index.css";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
