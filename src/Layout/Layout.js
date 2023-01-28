import { Fragment } from "react";
import Header from "./Header";
import "./Layout.css";
import React from "react";
const Layout = ({ children, header, desktopHeader, desktopSubHeader }) => {
  return (
    <Fragment>
      <Header title={header} />
      <div className="layout">
        <div className="desktop-title">
          <h1>{desktopHeader}</h1>
          <h2>{desktopSubHeader}</h2>
        </div>
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
