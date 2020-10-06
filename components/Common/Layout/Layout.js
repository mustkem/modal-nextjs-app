import React from "react";
import Header from "../Header";
// import Footer from "../Footer";

import Style from "./style";

function Layout(props) {
  return (
    <div className="layout">
      {<Style />}
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
